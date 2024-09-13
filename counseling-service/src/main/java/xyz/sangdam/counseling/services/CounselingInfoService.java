package xyz.sangdam.counseling.services;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import xyz.sangdam.counseling.controllers.CounselingSearch;
import xyz.sangdam.counseling.entities.Counseling;
import xyz.sangdam.counseling.repositories.CounselingRepository;
import xyz.sangdam.global.ListData;

@Service
@RequiredArgsConstructor
public class CounselingInfoService {
    private final CounselingRepository groupRepository;

    public Counseling get(Long cNo) {
        return null;
    }

    public ListData<Counseling> getList(CounselingSearch search) {
        return null;
    }

    private void addInfo(Counseling item) {

    }
}