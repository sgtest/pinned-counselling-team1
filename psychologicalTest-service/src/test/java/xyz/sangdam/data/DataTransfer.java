package xyz.sangdam.data;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import xyz.sangdam.psychologicalTest.constants.PsychologicalTestType;
import xyz.sangdam.psychologicalTest.entities.Question;
import xyz.sangdam.psychologicalTest.repositories.QuestionRepository;

import java.io.File;
import java.util.Scanner;

@SpringBootTest
public class DataTransfer {

    @Autowired
    private QuestionRepository repository;

    @Test
    void tranfer() throws Exception {
        Scanner sc = new Scanner(new File("D:/data/qdata.txt"));
        //int EVASION = 0, STRESS = 0, INTERNET_ADDICTION = 0, EATING_DISORDER = 0;
        while(sc.hasNextLine()) {
            String line = sc.nextLine();
            String[] data = line.split("\\|\\|");
            String type = data[0];
            String q = data[1];
            /*
            int score = 2;
            if (type.equals("EVASION")) {
                score = EVASION % 5 + 1;
                EVASION++;
            } else if (type.equals("STRESS")) {
                score = STRESS % 3 + 1;
                STRESS++;
            } else if (type.equals("INTERNET_ADDICTION")) {
                score = INTERNET_ADDICTION % 4 + 1;
                INTERNET_ADDICTION++;
            } else if (type.equals("EATING_DISORDER")) {
                score = EATING_DISORDER % 5 + 1;
                EATING_DISORDER++;
            }
            */
            Question item = Question.builder()
                    .questionText(q)
                    .testType(PsychologicalTestType.valueOf(type))
                    .build();

            repository.saveAndFlush(item);
         }
    }
}
