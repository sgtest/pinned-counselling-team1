package xyz.sangdam.psychologicalTest.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import xyz.sangdam.psychologicalTest.constants.PsychologicalTestType;
import xyz.sangdam.psychologicalTest.entities.Question;

import java.util.List;

public interface QuestionRepository extends JpaRepository<Question, Long>, QuerydslPredicateExecutor<Question> {
    List<Question> findByTestType(PsychologicalTestType testType);
}