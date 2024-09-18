package xyz.sangdam.psychologicalTest.services;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import xyz.sangdam.member.MemberUtil;
import xyz.sangdam.psychologicalTest.constants.PsychologicalTestType;
import xyz.sangdam.psychologicalTest.controllers.RequestAnswer;
import xyz.sangdam.psychologicalTest.entities.Answer;
import xyz.sangdam.psychologicalTest.repositories.AnswerRepository;

import java.time.LocalDateTime;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class AnswerSaveService {

    private final AnswerRepository answerRepository;
    private final MemberUtil memberUtil;
    private final ObjectMapper om;

    @Transactional
    public void save(RequestAnswer form)  {
        Map<Long, Integer> test = form.getAnswers();

        String answerData = null;
        try {
            answerData = om.writeValueAsString(test);
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }

        Answer answer = Answer.builder()
                .questionAndAnswer(answerData)
                .studentNo(memberUtil.getStudentNo())
                .testType(PsychologicalTestType.valueOf(form.getTestType()))
                .testDate(LocalDateTime.now())
                .build();

        calculateScore(answer, test);

        answerRepository.save(answer);
    }

    public void calculateScore(Answer answer, Map<Long, Integer> questionAnswerMap) {

        long totalScore = questionAnswerMap.values().stream().mapToLong(Integer::longValue).sum();
        answer.setScore(totalScore);
    }
}