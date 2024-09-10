package xyz.sangdam.psychologicalTest.entities;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QTestResultInfo is a Querydsl query type for TestResultInfo
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QTestResultInfo extends EntityPathBase<TestResultInfo> {

    private static final long serialVersionUID = 1416855593L;

    public static final QTestResultInfo testResultInfo = new QTestResultInfo("testResultInfo");

    public final NumberPath<Long> endScore = createNumber("endScore", Long.class);

    public final StringPath resultDescription = createString("resultDescription");

    public final NumberPath<Long> resultInfoId = createNumber("resultInfoId", Long.class);

    public final NumberPath<Long> startScore = createNumber("startScore", Long.class);

    public final EnumPath<xyz.sangdam.psychologicalTest.constants.PsychologicalTestType> testType = createEnum("testType", xyz.sangdam.psychologicalTest.constants.PsychologicalTestType.class);

    public QTestResultInfo(String variable) {
        super(TestResultInfo.class, forVariable(variable));
    }

    public QTestResultInfo(Path<? extends TestResultInfo> path) {
        super(path.getType(), path.getMetadata());
    }

    public QTestResultInfo(PathMetadata metadata) {
        super(TestResultInfo.class, metadata);
    }

}

