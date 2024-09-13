package xyz.sangdam.counseling.controllers;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalTime;

@Data
public class RequestReservation {
    private Long cNo;

    @JsonFormat(pattern="yyyy-MM-dd")
    private LocalDate rDate; // 예약일

    @JsonFormat(pattern="HH:mm")
    private LocalTime rTime; // 예약시간
}