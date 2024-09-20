package xyz.sangdam.psychologicalTest.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import xyz.sangdam.psychologicalTest.constants.PsychologicalTestType;

@Data
@Entity
@Builder
@NoArgsConstructor @AllArgsConstructor
public class Question {
    @Id @GeneratedValue
    private Long questionId; // 문항 번호

    private String questionText; // 문항 내용(문항명)

    @Enumerated(EnumType.STRING)
    @Column(length=30)
    private PsychologicalTestType testType;
}