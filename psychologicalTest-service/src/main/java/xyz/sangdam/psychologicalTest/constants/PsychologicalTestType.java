package xyz.sangdam.psychologicalTest.constants;

import java.util.HashMap;
import java.util.Map;

// 심리검사 종류
public enum PsychologicalTestType {
    COMPULSION("강박증") {
        @Override
        public Map<String, String> getResult(long score) {
            String range = null, title = null, content = null;
            if (score < 45) {
                range = "30-44";
                title = "평균 범위의 강박 증상";
                content = "강박 증상이 낮은 편으로, 일상생활에서 특별한 어려움을 경험하지 않는 상태입니다.";
            } else if (score < 50) {
                range = "45-49";
                title = "중간 정도의 강박 증상";
                content = "중간 정도의 강박 증상을 겪고 계시지만, 강박장애 수준까지는 아닙니다. 이는 개인의 상태에 따라 큰 불편감을 경험하실 수도 있고, 불편하기는 하지만 일상생활을 하시는 데는 큰 지장이 없을 수도 있는 상태입니다만 본인이 불편감을 느낀다면 집단치료나 개인 상담을 통해서 효과를 보실 수 있습니다. 정확한 자신의 증상을 파악하고 싶다면, 상담실에 방문해 주십시오.";

            } else {
                range = "50-60";
                title = "심한 정도의 강박 증상";
                content = "이 점수는 강박 장애일 가능성이 매우 큽니다. 오염이나 깔끔함과 관련된 반복적인 생각으로 상당한 불편감을 느끼고 계시며, 어떤 경우에는 자신의 불안을 해소하기 위해서 특정한 강박 행동을 사용할 가능성도 높은 상태입니다. 강박 장애는 치료하지 않으면 그 증상이 매우 오래 지속되오니, 시급히 상담센터를 방문하여 전문적인 치료를 받는 것을 권장합니다.";
            }

            Map<String, String> result = new HashMap<>();
            result.put("range", range);
            result.put("title", title);
            result.put("content", content);

            return result;
        }
    }, // 강박증
    EVASION("사회 공포/회피") {
        @Override
        public Map<String, String> getResult(long score) {
            return Map.of();
        }
    }, // 사회 공포/회피
    STRESS("스트레스") {
        @Override
        public Map<String, String> getResult(long score) {
            return Map.of();
        }
    }, // 스트레스
    INTERNET_ADDICTION("인터넷 중독") {
        @Override
        public Map<String, String> getResult(long score) {
            return Map.of();
        }
    }, // 인터넷 중독
    EATING_DISORDER("섭식장애") {
        @Override
        public Map<String, String> getResult(long score) {
            return Map.of();
        }
    }; // 섭식장애

    private final String title;

    PsychologicalTestType(String title) {
        this.title = title;
    }

    public String getTitle() {
        return title;
    }

    public abstract Map<String, String> getResult(long score);
}