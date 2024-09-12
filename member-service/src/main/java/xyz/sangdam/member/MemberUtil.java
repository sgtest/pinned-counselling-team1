package xyz.sangdam.member;


import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import xyz.sangdam.member.constants.UserType;
import xyz.sangdam.member.entities.Employee;
import xyz.sangdam.member.entities.Member;
import xyz.sangdam.member.entities.Student;

@Component
@RequiredArgsConstructor
public class MemberUtil {

    public boolean isLogin() {
        return getMember() != null;
    }

    public boolean isStudent() {
        return isLogin() && getMember() instanceof Student;
    }

    public boolean isAdmin() {
        Member member = getMember();
        return isLogin() && member instanceof Employee && member.getUserType() == UserType.ADMIN;
    }

    public boolean isProfessor() {
        Member member = getMember();
        return isLogin() && member instanceof Employee && member.getUserType() == UserType.PROFESSOR;
    }

    public boolean isCounselor() {
        Member member = getMember();
        return isLogin() && member instanceof Employee && member.getUserType() == UserType.COUNSELOR;
    }

    public <T extends Member> T getMember() {

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        if (authentication != null && authentication.isAuthenticated() && authentication.getPrincipal() instanceof MemberInfo memberInfo) {

            return (T)memberInfo.getMember();
        }

        return null;
    }
}