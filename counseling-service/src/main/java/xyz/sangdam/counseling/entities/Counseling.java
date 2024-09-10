package xyz.sangdam.counseling.entities;

import jakarta.persistence.*;
import lombok.Data;
import xyz.sangdam.global.entities.BaseMemberEntity;

@Data
@Entity
public class Counseling extends BaseMemberEntity {
    @Id @GeneratedValue
    private Long counselingNo;

    @Column(length=60, nullable = false)
    private String counselingName; // 상담명

    @Lob
    private String counsellingDes; // 상담 설명

    @Column(length=20, nullable = false)
    private String counselorName; // 상담사명

    @Column(length=65, nullable = false)
    private String counselorEmail; // 상담사 이메일
}
