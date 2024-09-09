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
import xyz.sangdam.member.entities.*;
import xyz.sangdam.member.repositories.DeptInfoRepository;
import xyz.sangdam.member.repositories.EmployeeRepository;
import xyz.sangdam.member.repositories.ProfessorRepository;
import xyz.sangdam.member.repositories.StudentRepository;

import java.util.Objects;

@Service
@Transactional
@RequiredArgsConstructor
public class MemberSaveService {
    private final StudentRepository studentRepository;
    private final EmployeeRepository employeeRepository;
    private final ProfessorRepository professorRepository;
    private final DeptInfoRepository deptInfoRepository;

    private final PasswordEncoder passwordEncoder;
    private final MemberUtil memberUtil;
    /**
     * 회원 가입 처리
     *
     * @param form
     */
    public void save(RequestJoin form) {

        UserType userType = UserType.valueOf(Objects.requireNonNullElse(form.getUserSe(), UserType.STUDENT.name()));

        Member member = null;
        switch(userType) {

            case EMPLOYEE:
                member = new Employee();
            case PROFESSOR:
                member = new Professor();
            default:
                member = new Student();
        }

        // 공통 항목 처리 S
        String hash = passwordEncoder.encode(form.getPassword()); // BCrypt 해시화
        member.setEmail(form.getEmail());
        member.setPassword(hash);
        member.setUserSe(userType);
        // 공통 항목 처리 E

        // 사용자 타입 별 추가 처리 S
        // 부서 정보
        String deptNo = form.getDeptNo();
        DeptInfo deptInfo = StringUtils.hasText(deptNo) ? deptInfoRepository.findById(deptNo).orElse(null) : null;

        if (member instanceof Employee employee) { // 교직원
            employee.setDeptInfo(deptInfo);
            employee.setEmpNo(form.getEmpNo());

        } else if (member instanceof Professor professor) {  // 교수

        } else if (member instanceof Student student){ // 학생
            student.setDeptInfo(deptInfo);
            student.setStdntNo(form.getStdntNo());
            student.setGrade(form.getGrade());
            student.setMobile(form.getMobile());
            student.setGid(form.getGid());
            student.setZonecode(form.getZonecode());
            student.setAddress(form.getAddress());
            student.setAddresssub(form.getAddresssub());
            student.setBirth(form.getBirth());
            student.setGender(Gender.valueOf(form.getGender()));
            student.setStatus(Status.valueOf(form.getStatus()));
        }




        // 사용자 타입 별 추가 처리 E
    }

    /**
     * 회원정보 수정
     * @param form
     */
    public void save(RequestUpdate form) {

    }


}
