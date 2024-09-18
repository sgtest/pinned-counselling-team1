package xyz.sangdam.psychologicalTest.exceptions;

import org.springframework.http.HttpStatus;
import xyz.sangdam.global.exceptions.CommonException;

public class AnswerNotFoundException extends CommonException {
    public AnswerNotFoundException() {
        super("NotFound.answer", HttpStatus.NOT_FOUND);
        setErrorCode(true);
    }
}
