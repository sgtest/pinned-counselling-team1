package xyz.sangdam.counseling.entities;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Data
@Entity
public class GroupSchedule {
    @Id @GeneratedValue
    private Long scheduleNo;

    @ManyToOne(fetch= FetchType.LAZY)
    @JoinColumn(name="counselingNo")
    private GroupCounseling counseling;

    private LocalDate counselingDate; // 상담일

    @Lob
    private String memo; // 상담 일지(그룹 학생들)
}
