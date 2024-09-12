package xyz.sangdam.psychologicalTest.entities;

import jakarta.persistence.*;
import lombok.Data;
import xyz.sangdam.psychologicalTest.constants.PsychologicalTestType;

import java.time.LocalDateTime;

@Data
@Entity
public class TestResult {

    @Id
    @Column(length = 10)
    private Long resultId; // 검사 결과 일련번호

    @Column(name="stdntNo", length = 10)
    private Long studentNo; // 학번

    @Column(length = 10)
    private Long score; // 검사 점수

    private LocalDateTime testDate; // 검사 날짜

    @Enumerated(EnumType.STRING)
    @Column(length=30)
    private PsychologicalTestType testType;

    @Lob
    private String questionAndAnswer; // 질문번호+응답번호(객관식)을 JSON으로 받음
}