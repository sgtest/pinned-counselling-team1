package xyz.sangdam.counseling.services;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import xyz.sangdam.counseling.controllers.RequestCounseling;
import xyz.sangdam.counseling.entities.Counseling;
import xyz.sangdam.counseling.exceptions.CounselingNotFoundException;
import xyz.sangdam.counseling.repositories.CounselingRepository;

import java.util.Objects;

@Service
@RequiredArgsConstructor
public class CounselingSaveService {
    private final CounselingRepository repository;

    public void save(RequestCounseling form) {  // 상담 등록
        Long cNo = form.getCNo();
        String mode = Objects.requireNonNullElse(form.getMode(), "write");

        Counseling counseling = null;
        if (mode.equals("update") && cNo != null) {
            counseling = repository.findById(cNo).orElseThrow(CounselingNotFoundException::new);
        } else {
            counseling = new Counseling();
            counseling.setGid(form.getGid());
        }

        counseling.setCounselingDes(form.getCounselingDes());
        counseling.setCounselingName(form.getCounselingName());
        counseling.setCounselorName(form.getCounselorName());
        counseling.setCounselorEmail(form.getCounselorEmail());

        counseling.setReservationSdate(form.getReservationSdate());
        counseling.setReservationEdate(form.getReservationEdate());

        counseling.setCounselingDate(form.getCounselingDate());
        counseling.setCounselingLimit(form.getCounselingLimit());

        repository.saveAndFlush(counseling);
    }
}