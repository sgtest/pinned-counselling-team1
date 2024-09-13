package xyz.sangdam.member.entities;

import com.fasterxml.jackson.annotation.JsonAlias;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import xyz.sangdam.global.entities.BaseEntity;
import xyz.sangdam.member.constants.Gender;
import xyz.sangdam.member.constants.UserType;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class Member extends BaseEntity {
    private Long seq; // 사용자 번호
    private String email; // 로그인 ID
    private String password; // 비밀번호

    @JsonAlias("userType")
    private String _userType; // 사용자 구분, UserType -> String으로(Enum은 매칭 안됨)

    private String userName; // 성명
    private String mobile; // 핸드폰 번호

    @JsonAlias("gender")
    private String _gender; // 성별, Gender -> String으로(Enum은 매칭 안됨)
    private String deptNm; // 부서명(학과명)
    private String deptNo; // 부서번호

    /* 직원 추가 정보 */
    private String empNo; // 사번
    private String subject; // 담당 과목

    /* 학생 추가 정보 */
    private String grade; // 학년
    private String stdntNo; // 학번

    private Member professor; // 지도 교수

    @JsonIgnore // 내부에서만 사용
    public UserType getUserType() {
        return _userType == null ? null : UserType.valueOf(_userType);
    }

    @JsonIgnore // 내부에서만 사용
    public Gender getGender() {
        return _gender == null ? null : Gender.valueOf(_gender);
    }
}