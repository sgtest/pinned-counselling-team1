package xyz.sangdam.member.entities;

import jakarta.persistence.*;
import lombok.Data;
import xyz.sangdam.global.entities.BaseEntity;
import xyz.sangdam.member.constants.Gender;
import xyz.sangdam.member.constants.Status;
import xyz.sangdam.member.constants.UserType;

import java.time.LocalDate;
import java.util.UUID;

@Data
@Entity
@Table(name="USER_INFO")
@Inheritance(strategy = InheritanceType.JOINED)
public class Member extends BaseEntity {
    @Id @GeneratedValue
    private Long seq; // 사용자 번호

    @Column(length=50, unique = true, nullable = false)
    private String email; // 로그인 ID

    @Column(length=200, nullable = false)
    private String password; // 비밀번호

    @Enumerated(EnumType.STRING)
    @Column(length=10, nullable = false)
    private UserType userType; // 사용자 구분

    @Column(length=10, nullable = false)
    private String userName; // 성명

    @Column(length=100)
    private String gid = UUID.randomUUID().toString(); // 파일

}