package xyz.sangdam.psychologicalTest.controllers;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.util.Map;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class RequestAnswer {

    @NotBlank
    private String testType;

    @NotNull
    private Map<Long, Integer> answers;
}