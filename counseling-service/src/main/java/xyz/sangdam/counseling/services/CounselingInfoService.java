package xyz.sangdam.counseling.services;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import xyz.sangdam.counseling.controllers.CounselingSearch;
import xyz.sangdam.counseling.entities.Counseling;
import xyz.sangdam.counseling.exceptions.CounselingNotFoundException;
import xyz.sangdam.counseling.repositories.CounselingRepository;
import xyz.sangdam.file.services.FileInfoService;
import xyz.sangdam.global.ListData;

@Service
@RequiredArgsConstructor
public class CounselingInfoService {
    private final CounselingRepository repository;
    private final FileInfoService fileInfoService;

    public Counseling get(Long cNo) {
        Counseling item = repository.findById(cNo).orElseThrow(CounselingNotFoundException::new);

        // 추가 처리

        addInfo(item);

        return item;
    }

    public ListData<Counseling> getList(CounselingSearch search) {
        return null;
    }

    private void addInfo(Counseling item) {

    }
}