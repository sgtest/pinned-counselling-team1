package xyz.sangdam.member.services;

import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;
import xyz.sangdam.member.MemberUtil;
import xyz.sangdam.member.constants.Gender;
import xyz.sangdam.member.constants.Status;
import xyz.sangdam.member.constants.UserType;
import xyz.sangdam.member.controllers.RequestJoin;
import xyz.sangdam.member.controllers.RequestUpdate;
import xyz.sangdam.member.entities.Employee;
import xyz.sangdam.member.entities.Member;
import xyz.sangdam.member.entities.Student;
import xyz.sangdam.member.exceptions.MemberNotFoundException;
import xyz.sangdam.member.repositories.EmployeeRepository;
import xyz.sangdam.member.repositories.MemberRepository;
import xyz.sangdam.member.repositories.StudentRepository;



@Service
@Transactional
@RequiredArgsConstructor
public class MemberSaveService {
    private final MemberRepository memberRepository;
    private final EmployeeRepository employeeRepository;
    private final StudentRepository studentRepository;

    private final PasswordEncoder passwordEncoder;
    private final MemberUtil memberUtil;
    /**
     * 회원 가입 처리
     *
     * @param form
     */
    public void save(RequestJoin form) {
        UserType userType = StringUtils.hasText(form.getUserType()) ? UserType.valueOf(form.getUserType()) : UserType.STUDENT;

        Member member = null;
        if (userType == UserType.PROFESSOR || userType == UserType.COUNSELOR || userType == UserType.ADMIN) {
            member = new Employee();
        } else { // 학생
            member = new Student();
        }

        /* 공통 항목 처리 S */
        String hash = passwordEncoder.encode(form.getPassword()); // BCrypt 해시화
        String mobile = form.getMobile();
        if (StringUtils.hasText(mobile)) {
            mobile = mobile.replaceAll("\\D", "");
        }
        member.setEmail(form.getEmail());
        member.setUserName(form.getUserName());
        member.setPassword(hash);
        member.setMobile(mobile);
        member.setBirth(form.getBirth());
        member.setUserType(userType);
        member.setZonecode(form.getZonecode());
        member.setAddress(form.getAddress());
        member.setAddresssub(form.getAddressSub());
        member.setGid(form.getGid());
        member.setStatus(form.getStatus() == null ? Status.EMPLOYED : Status.valueOf(form.getStatus()));
        member.setGender(form.getGender() == null ? Gender.FEMALE : Gender.valueOf(form.getGender()));
        member.setDeptNm(form.getDeptNm());
        member.setDeptNo(form.getDeptNo());
        /* 공통 항목 처리 E */

        // 상담사, 교수, 관리자 추가 정보
        if (member instanceof Employee employee) {
            employee.setEmpNo(form.getEmpNo());
            employee.setSubject(form.getSubject());

            employeeRepository.saveAndFlush(employee);

        } else if (member instanceof Student student){ // 학생 추가 정보
            student.setStdntNo(form.getStdntNo());
            student.setGrade(form.getGrade());

            studentRepository.saveAndFlush(student);
        }
    }

    /**
     * 회원정보 수정
     *
     * @param form
     */
    public void save(RequestUpdate form) {
        Member member = memberUtil.getMember();
        String email = member.getEmail();
        member = memberRepository.findByEmail(email).orElseThrow(MemberNotFoundException::new);

        // 학생, 상담사, 교수가 자신의 개인정보 수정
        if (memberUtil.isStudent() || memberUtil.isCounselor() || memberUtil.isProfessor()) {
            String mobile = form.getMobile();
            if (StringUtils.hasText(mobile)) {
                mobile = mobile.replaceAll("\\D", "");
            }
            member.setMobile(mobile);
            member.setZonecode(form.getZonecode());
            member.setAddress(form.getAddress());
            member.setAddresssub(form.getAddresssub());

        }

        // 관리자가 모든 회원의 개인정보 수정
        if (memberUtil.isAdmin()) {
            // 전체 회원 리스트 조회


        }
    }
}
