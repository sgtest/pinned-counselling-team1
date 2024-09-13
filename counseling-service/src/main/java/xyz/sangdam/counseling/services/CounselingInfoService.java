package xyz.sangdam.counseling.services;

import com.querydsl.core.BooleanBuilder;
import com.querydsl.core.types.dsl.StringExpression;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import xyz.sangdam.counseling.controllers.CounselingSearch;
import xyz.sangdam.counseling.entities.Counseling;
import xyz.sangdam.counseling.entities.QCounseling;
import xyz.sangdam.counseling.exceptions.CounselingNotFoundException;
import xyz.sangdam.counseling.repositories.CounselingRepository;
import xyz.sangdam.file.entities.FileInfo;
import xyz.sangdam.file.services.FileInfoService;
import xyz.sangdam.global.ListData;
import xyz.sangdam.global.Pagination;

import java.time.LocalDate;
import java.util.List;

import static org.springframework.data.domain.Sort.Order.desc;

@Service
@RequiredArgsConstructor
public class CounselingInfoService {
    private final CounselingRepository repository;
    private final FileInfoService fileInfoService;
    private final HttpServletRequest request;

    public Counseling get(Long cNo) {
        BooleanBuilder builder = new BooleanBuilder();
        QCounseling counseling = QCounseling.counseling;
        builder.and(counseling.cNo.eq(cNo))
                .and(counseling.deletedAt.isNull());

        Counseling item = repository.findOne(builder).orElseThrow(CounselingNotFoundException::new);

        // 추가 처리

        addInfo(item);

        return item;
    }

    public ListData<Counseling> getList(CounselingSearch search) {
        int page = Math.max(search.getPage(), 1);
        int limit = search.getLimit();
        limit = limit < 1 ? 20 : limit;

        /* 검색 처리 S */
        BooleanBuilder andBuilder = new BooleanBuilder();
        QCounseling counseling = QCounseling.counseling;
        String sopt = search.getSopt();
        String skey = search.getSkey();

        andBuilder.and(counseling.deletedAt.isNull());

        sopt = StringUtils.hasText(sopt) ? sopt.toUpperCase() : "ALL";
        if (StringUtils.hasText(skey)) {
            skey = skey.trim();
            StringExpression expression = null;
            if (sopt.equals("COUNSELING_NAME")) {
                expression = counseling.counselingName;
            } else if (sopt.equals("COUNSELOR")) {
                expression = counseling.counselorName.concat(counseling.counselorEmail);
            } else { // 통합 검색
                expression = counseling.counselingName
                        .concat(counseling.counselorEmail)
                        .concat(counseling.counselorName);
            }

            if (expression != null) {
                andBuilder.and(expression.contains(skey));
            }
        }

        // 신청일 검색
        LocalDate sDate = search.getSDate(); // 검색 시작일
        LocalDate eDate = search.getEDate(); // 검색 종료일
        if (sDate != null) {
            andBuilder.and(counseling.counselingDate.goe(sDate.atTime(0, 0, 0)));
        }

        if (eDate != null) {
            andBuilder.and(counseling.counselingDate.loe(eDate.atTime(23,59,59)));
        }

        /* 검색 처리 E */

        Pageable pageable = PageRequest.of(page - 1, limit, Sort.by(desc("createdAt")));
        Page<Counseling> data = repository.findAll(andBuilder, pageable);

        // (int page, int total, int ranges, int limit, HttpServletRequest request)
        long total = repository.count(andBuilder);
        Pagination pagination = new Pagination(page, (int)total, 10, limit, request);

        List<Counseling> items = data.getContent();
        if (items != null && !items.isEmpty()) {
            items.forEach(this::addInfo);
        }

        return new ListData<>(items, pagination);
    }

    private void addInfo(Counseling item) {
        try {
            List<FileInfo> editorImages = fileInfoService.getList(item.getGid(), "editor");
            item.setEditorImages(editorImages);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}