package xyz.sangdam.counseling.services;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import xyz.sangdam.counseling.repositories.GroupCounselingRepository;
import xyz.sangdam.counseling.repositories.PersonalCounselingRepository;

@Service
@RequiredArgsConstructor
public class CounselingDeleteService {
    private final PersonalCounselingRepository personalRepository;
    private final GroupCounselingRepository groupRepository;
    private final FileDeleteService
    public void delete(Long cNo) {

    }
}
