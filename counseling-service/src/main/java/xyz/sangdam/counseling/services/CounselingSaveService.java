package xyz.sangdam.counseling.services;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import xyz.sangdam.counseling.controllers.RequestCounseling;
import xyz.sangdam.counseling.repositories.CounselingRepository;

@Service
@RequiredArgsConstructor
public class CounselingSaveService {
    private final CounselingRepository repository;

    public void save(RequestCounseling form) {  // 상담 등록
    }
}