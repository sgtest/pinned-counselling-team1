package xyz.sangdam.psychologicalTest.entities;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QTestResult is a Querydsl query type for TestResult
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QTestResult extends EntityPathBase<TestResult> {

    private static final long serialVersionUID = -2023191333L;

    public static final QTestResult testResult = new QTestResult("testResult");

    public final NumberPath<Long> resultId = createNumber("resultId", Long.class);

    public final NumberPath<Long> score = createNumber("score", Long.class);

    public final NumberPath<Long> studentNo = createNumber("studentNo", Long.class);

    public final DateTimePath<java.time.LocalDateTime> testDate = createDateTime("testDate", java.time.LocalDateTime.class);

    public final EnumPath<xyz.sangdam.psychologicalTest.constants.PsychologicalTestType> testType = createEnum("testType", xyz.sangdam.psychologicalTest.constants.PsychologicalTestType.class);

    public QTestResult(String variable) {
        super(TestResult.class, forVariable(variable));
    }

    public QTestResult(Path<? extends TestResult> path) {
        super(path.getType(), path.getMetadata());
    }

    public QTestResult(PathMetadata metadata) {
        super(TestResult.class, metadata);
    }

}

