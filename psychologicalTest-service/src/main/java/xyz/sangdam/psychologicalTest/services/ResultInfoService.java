package xyz.sangdam.psychologicalTest.services;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import xyz.sangdam.global.CommonSearch;
import xyz.sangdam.global.ListData;
import xyz.sangdam.psychologicalTest.entities.TestResult;

@Service
@RequiredArgsConstructor
public class ResultInfoService {

    public TestResult get(Long resultId) {

        return null;
    }

    public ListData<TestResult> getList(CommonSearch search) {

        return null;
    }

}
