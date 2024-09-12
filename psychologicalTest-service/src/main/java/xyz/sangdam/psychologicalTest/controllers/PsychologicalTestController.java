package xyz.sangdam.psychologicalTest.controllers;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;
import xyz.sangdam.global.CommonSearch;
import xyz.sangdam.global.Utils;
import xyz.sangdam.global.exceptions.BadRequestException;
import xyz.sangdam.global.rests.JSONData;
import xyz.sangdam.psychologicalTest.constants.PsychologicalTestType;
import xyz.sangdam.psychologicalTest.entities.TestQuestion;
import xyz.sangdam.psychologicalTest.services.ResultSaveService;
import xyz.sangdam.psychologicalTest.services.TestQuestionService;

import java.util.List;

@Tag(name = "PsychologicalTest", description = "심리검사 API")
@RestController
@RequiredArgsConstructor
@RequestMapping("/psychological-test")
public class PsychologicalTestController {

    private final TestQuestionService questionService;
    private final ResultSaveService saveService;
    private final Utils utils;

    @Operation(summary = "자가진단 심리검사 목록 조회", method = "GET")
    @ApiResponse(responseCode = "200", description = "심리검사 목록 조회")
    @GetMapping("/list")
    public JSONData getTestList() {
        List<String[]> data = PsychologicalTestType.getList();

        return new JSONData(data);
    }

    @Operation(summary = "심리검사 문항 조회", method = "GET")
    @ApiResponse(responseCode = "200", description = "검사 문항 조회")
    @Parameter(name="testType", required = true, description = "경로변수, 심리검사 종류(type)", example = "stress")
    @GetMapping("/{type}")
    public JSONData getTestItems(@PathVariable("type") String type) {
        List<TestQuestion> items = questionService.getQuestions(PsychologicalTestType.valueOf(type));

        return new JSONData(items);
    }

    @Operation(summary = "심리검사 답변 저장", method = "POST")
    @ApiResponse(responseCode = "201", description = "답변 저장 성공")
    @ApiResponse(responseCode = "400", description = "잘못된 요청")
    @PostMapping("/answer")
    public ResponseEntity<Void> saveTestAnswers(
           @Valid @RequestBody RequestAnswer answer, Errors errors) {

        if (errors.hasErrors()) {
            throw new BadRequestException(utils.getErrorMessages(errors));
        }

        saveService.save(answer);

        return ResponseEntity.status(HttpStatus.CREATED).build();
    }


    @Operation(summary = "심리검사 테스트 결과 목록")
    @GetMapping("/answers")
    public JSONData testAnswers(CommonSearch search) {

        return null;
    }

    @Operation(summary = "심리검사 테스트 조회")
    @GetMapping("/answer/{resultId}")
    public JSONData testAnswer(@PathVariable("resultId") Long resultId) {

        return null;
    }

    /*
    @Operation(summary = "심리검사 결과 조회", method = "GET")
    @ApiResponse(responseCode = "200", description = "결과 조회 성공")
    @ApiResponse(responseCode = "404", description = "결과를 찾을 수 없음")
    @Parameter(name = "testType", required = true, description = "경로변수, 심리검사 종류(testType)", example = "stress")
    @GetMapping("/{testType}/result")
    */
}

