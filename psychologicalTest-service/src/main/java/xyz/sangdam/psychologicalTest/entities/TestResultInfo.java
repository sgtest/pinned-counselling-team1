package xyz.sangdam.psychologicalTest.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class TestResultInfo {

    @Id
    @Column(length = 10)
    private Long resultInfoId; // 검사 정보 일련번호
}
