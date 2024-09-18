package xyz.sangdam.psychologicalTest.entities;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QQuestion is a Querydsl query type for Question
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QQuestion extends EntityPathBase<Question> {

    private static final long serialVersionUID = 854849650L;

    public static final QQuestion question = new QQuestion("question");

    public final NumberPath<Long> questionId = createNumber("questionId", Long.class);

    public final StringPath questionText = createString("questionText");

    public final EnumPath<xyz.sangdam.psychologicalTest.constants.PsychologicalTestType> testType = createEnum("testType", xyz.sangdam.psychologicalTest.constants.PsychologicalTestType.class);

    public QQuestion(String variable) {
        super(Question.class, forVariable(variable));
    }

    public QQuestion(Path<? extends Question> path) {
        super(path.getType(), path.getMetadata());
    }

    public QQuestion(PathMetadata metadata) {
        super(Question.class, metadata);
    }

}

