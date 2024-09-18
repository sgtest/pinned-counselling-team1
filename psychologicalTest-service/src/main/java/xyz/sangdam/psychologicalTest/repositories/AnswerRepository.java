package xyz.sangdam.psychologicalTest.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import xyz.sangdam.global.ListData;
import xyz.sangdam.psychologicalTest.entities.Answer;

import java.util.List;

public interface AnswerRepository extends JpaRepository<Answer, Long>, QuerydslPredicateExecutor<Answer> {

    ListData<Answer> findByStudentNo(String studentNo);
}