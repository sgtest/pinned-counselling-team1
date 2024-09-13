package xyz.sangdam.member;


import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import xyz.sangdam.member.constants.UserType;
import xyz.sangdam.member.entities.Member;

@Component
@RequiredArgsConstructor
public class MemberUtil {

    public boolean isLogin() {
        return getMember() != null;
    }

    public boolean isStudent() {
        return isLogin() && getMember().getUserType() == UserType.STUDENT;
    }

    public boolean isAdmin() {
        Member member = getMember();
        return isLogin() && member.getUserType() == UserType.ADMIN;
    }

    public boolean isProfessor() {
        return isLogin() && getMember().getUserType() == UserType.PROFESSOR;
    }

    public boolean isCounselor() {
        return isLogin() && getMember().getUserType() == UserType.COUNSELOR;
    }

    public Member getMember() {

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        if (authentication != null && authentication.isAuthenticated() && authentication.getPrincipal() instanceof MemberInfo memberInfo) {

            return memberInfo.getMember();
        }

        return null;
    }
}