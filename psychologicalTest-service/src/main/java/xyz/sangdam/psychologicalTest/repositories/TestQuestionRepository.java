package xyz.sangdam.psychologicalTest.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import xyz.sangdam.psychologicalTest.entities.TestQuestion;

public interface TestQuestionRepository extends JpaRepository<TestQuestion, Long>, QuerydslPredicateExecutor<TestQuestion> {
}
