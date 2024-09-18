package xyz.sangdam.member.entities;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QStudent is a Querydsl query type for Student
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QStudent extends EntityPathBase<Student> {

    private static final long serialVersionUID = 1255017512L;

    public static final QStudent student = new QStudent("student");

    public final QMember _super = new QMember(this);

    //inherited
    public final DateTimePath<java.time.LocalDateTime> createdAt = _super.createdAt;

    //inherited
    public final DateTimePath<java.time.LocalDateTime> deletedAt = _super.deletedAt;

    //inherited
    public final StringPath email = _super.email;

    //inherited
    public final StringPath gid = _super.gid;

    public final StringPath grade = createString("grade");

    //inherited
    public final DateTimePath<java.time.LocalDateTime> modifiedAt = _super.modifiedAt;

    //inherited
    public final StringPath password = _super.password;

    //inherited
    public final NumberPath<Long> seq = _super.seq;

    public final StringPath stdntNo = createString("stdntNo");

    //inherited
    public final StringPath userName = _super.userName;

    //inherited
    public final EnumPath<xyz.sangdam.member.constants.UserType> userType = _super.userType;

    public QStudent(String variable) {
        super(Student.class, forVariable(variable));
    }

    public QStudent(Path<? extends Student> path) {
        super(path.getType(), path.getMetadata());
    }

    public QStudent(PathMetadata metadata) {
        super(Student.class, metadata);
    }

}

