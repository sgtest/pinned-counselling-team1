package xyz.sangdam.counseling.controllers;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.Lob;
import lombok.Data;
import xyz.sangdam.file.entities.FileInfo;

import java.time.LocalDate;
import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
@Data
public class RequestCounseling {
    private Long cNo; // 상담 번호

    private String gid;

    private String counselingType; // 개인/집단상담 구분

    private String personalCategory; // 개인상담 종류

    private String counselingName; // 상담명

    private String counselingDes; // 상담 설명

    private String counselorName; // 상담사명

    private String counselorEmail; // 상담사 이메일

    /* 개인상담 */
    @Lob
    private String reason; // 상담 사유

    /* 집단상담 */
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm")
    private LocalDate reservationSdate; // 신청기간 시작일시

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm")
    private LocalDate reservationEdate; // 신청기간 종료일시

    private LocalDate counselingDate; // 상담일

    private int counselingLimit; // 정원

    private List<FileInfo> editorImages; // 이미지 첨부
}
