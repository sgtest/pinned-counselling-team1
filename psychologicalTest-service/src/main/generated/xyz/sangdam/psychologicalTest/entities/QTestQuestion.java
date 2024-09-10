package xyz.sangdam.psychologicalTest.entities;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QTestQuestion is a Querydsl query type for TestQuestion
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QTestQuestion extends EntityPathBase<TestQuestion> {

    private static final long serialVersionUID = 503236900L;

    public static final QTestQuestion testQuestion = new QTestQuestion("testQuestion");

    public final NumberPath<Long> questionId = createNumber("questionId", Long.class);

    public final StringPath questionText = createString("questionText");

    public final EnumPath<xyz.sangdam.psychologicalTest.constants.PsychologicalTestType> testType = createEnum("testType", xyz.sangdam.psychologicalTest.constants.PsychologicalTestType.class);

    public QTestQuestion(String variable) {
        super(TestQuestion.class, forVariable(variable));
    }

    public QTestQuestion(Path<? extends TestQuestion> path) {
        super(path.getType(), path.getMetadata());
    }

    public QTestQuestion(PathMetadata metadata) {
        super(TestQuestion.class, metadata);
    }

}

