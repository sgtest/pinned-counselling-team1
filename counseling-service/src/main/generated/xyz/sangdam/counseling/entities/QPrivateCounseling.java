package xyz.sangdam.counseling.entities;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QPrivateCounseling is a Querydsl query type for PrivateCounseling
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QPrivateCounseling extends EntityPathBase<PrivateCounseling> {

    private static final long serialVersionUID = -1667537078L;

    public static final QPrivateCounseling privateCounseling = new QPrivateCounseling("privateCounseling");

    public final QCounseling _super = new QCounseling(this);

    //inherited
    public final StringPath counselingName = _super.counselingName;

    //inherited
    public final NumberPath<Long> counselingNo = _super.counselingNo;

    public final EnumPath<xyz.sangdam.counseling.constants.Category> counselingType = createEnum("counselingType", xyz.sangdam.counseling.constants.Category.class);

    //inherited
    public final StringPath counsellingDes = _super.counsellingDes;

    //inherited
    public final StringPath counselorEmail = _super.counselorEmail;

    //inherited
    public final StringPath counselorName = _super.counselorName;

    //inherited
    public final DateTimePath<java.time.LocalDateTime> createdAt = _super.createdAt;

    //inherited
    public final StringPath createdBy = _super.createdBy;

    //inherited
    public final DateTimePath<java.time.LocalDateTime> deletedAt = _super.deletedAt;

    //inherited
    public final DateTimePath<java.time.LocalDateTime> modifiedAt = _super.modifiedAt;

    //inherited
    public final StringPath modifiedBy = _super.modifiedBy;

    //inherited
    public final DatePath<java.time.LocalDate> reservationEdate = _super.reservationEdate;

    //inherited
    public final DatePath<java.time.LocalDate> reservationSdate = _super.reservationSdate;

    public QPrivateCounseling(String variable) {
        super(PrivateCounseling.class, forVariable(variable));
    }

    public QPrivateCounseling(Path<? extends PrivateCounseling> path) {
        super(path.getType(), path.getMetadata());
    }

    public QPrivateCounseling(PathMetadata metadata) {
        super(PrivateCounseling.class, metadata);
    }

}

