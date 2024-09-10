package xyz.sangdam.member.services;

import com.querydsl.core.BooleanBuilder;
import com.querydsl.jpa.impl.JPAQueryFactory;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;
import xyz.sangdam.global.ListData;
import xyz.sangdam.global.Pagination;
import xyz.sangdam.member.MemberInfo;
import xyz.sangdam.member.constants.UserType;
import xyz.sangdam.member.controllers.MemberSearch;
import xyz.sangdam.member.entities.Member;
import xyz.sangdam.member.entities.QMember;
import xyz.sangdam.member.repositories.EmployeeRepository;
import xyz.sangdam.member.repositories.MemberRepository;
import xyz.sangdam.member.repositories.ProfessorRepository;
import xyz.sangdam.member.repositories.StudentRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MemberInfoService implements UserDetailsService {

    private final MemberRepository memberRepository;
    private final StudentRepository studentRepository;
    private final EmployeeRepository employeeRepository;
    private final ProfessorRepository professorRepository;

    private final JPAQueryFactory queryFactory;
    private final HttpServletRequest request;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        Member member = memberRepository.findByEmail(username).orElseThrow(() -> new UsernameNotFoundException(username));
        UserType userType = member.getUserSe();
        switch(userType) {
            case EMPLOYEE: // 교직원
                member = employeeRepository.findById(member.getSeq()).orElseThrow(() -> new UsernameNotFoundException(username));

                break;
            case PROFESSOR: // 교수
                member = professorRepository.findById(member.getSeq()).orElseThrow(() -> new UsernameNotFoundException(username));
                break;
            default: // 학생
                member = studentRepository.findById(member.getSeq()).orElseThrow(() -> new UsernameNotFoundException(username));
        }

        List<SimpleGrantedAuthority> authorities = List.of(new SimpleGrantedAuthority(userType.name()));

        return MemberInfo.builder()
                .email(member.getEmail())
                .password(member.getPassword())
                .authorities(authorities)
                .member(member)
                .build();
    }

    /**
     * 회원 목록 조회
     *
     * @param search
     * @return
     */
    @Transactional
    public ListData<Member> getList(MemberSearch search) {
        int page = Math.max(search.getPage(), 1);
        int limit = search.getLimit();
        limit = limit < 1 ? 20 : limit;
        int offset = (page - 1) * limit;

        /* 검색 처리 S */
        BooleanBuilder andBuilder = new BooleanBuilder();
        QMember member = QMember.member;

        String sopt = search.getSopt();
        String skey = search.getSkey();
        sopt = StringUtils.hasText(sopt) ? sopt.toUpperCase() : "ALL";
        if (StringUtils.hasText(skey)) {
            skey = skey.trim();
            if (sopt.equals("ALL")) { // 통합 검색

            } else if (sopt.equals("name")) { // 회원명, 지도교수명

            }

        }

        /* 검색 처리 E */

        List<Member> items = queryFactory.selectFrom(member)
                .fetchJoin()
                .where(andBuilder)
                .offset(offset)
                .limit(limit)
                .orderBy(member.createdAt.desc())
                .fetch();

        long total = memberRepository.count(andBuilder);
        Pagination pagination = new Pagination(page, (int)total, 10, limit, request);

        return new ListData<>(items, pagination);
    }
}
