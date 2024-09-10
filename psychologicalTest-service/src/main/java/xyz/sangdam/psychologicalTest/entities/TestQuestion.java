package xyz.sangdam.psychologicalTest.entities;

import jakarta.persistence.*;
import lombok.Data;
import xyz.sangdam.psychologicalTest.constants.PsychologicalTestType;

@Data
@Entity
public class TestQuestion {
    @Id
    @Column(length = 10)
    private Long questionId; // 문항 번호

    @Lob
    private String questionText; // 문항 내용(문항명)

    @Enumerated(EnumType.STRING)
    @Column(length=30)
    private PsychologicalTestType testType;
}
