package xyz.sangdam.counseling.controllers;

import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;
import xyz.sangdam.global.CommonSearch;

import java.time.LocalDate;

@Data
public class CounselingSearch extends CommonSearch {
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private LocalDate sDate;

    @DateTimeFormat(pattern="yyyy-MM-dd")
    private LocalDate eDate;
}