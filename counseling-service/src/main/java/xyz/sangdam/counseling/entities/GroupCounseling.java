package xyz.sangdam.counseling.entities;

import jakarta.persistence.Entity;
import lombok.Data;

import java.time.LocalDate;

@Data
@Entity
public class GroupCounseling extends Counseling {
    private LocalDate counselingSdate; // 상담 시작일시
    private LocalDate counselingEdate; // 상담 종료일시
    private int counselingLimit;

}
