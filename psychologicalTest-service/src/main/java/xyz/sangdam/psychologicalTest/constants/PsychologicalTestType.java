package xyz.sangdam.psychologicalTest.constants;

import java.util.HashMap;
import java.util.List;
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
                content = "강박 증상이 낮은 편으로, 일상 생활에서 특별한 어려움을 경험하지 않는 상태입니다.";
            } else if (score < 50) {
                range = "45-49";
                title = "중간 정도의 강박 증상";
                content = "중간 정도의 강박 증상을 겪고 계시지만, 강박장애 수준까지는 아닙니다. 이는 개인의 상태에 따라 큰 불편감을 경험하실 수도 있고, 불편하기는 하지만 일상 생활을 하시는 데는 큰 지장이 없을 수도 있는 상태입니다만 본인이 불편감을 느낀다면 집단치료나 개인 상담을 통해서 효과를 보실 수 있습니다. 정확한 자신의 증상을 파악하고 싶다면, 상담실에 방문해 주십시오.";

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
            String range = null, title = null, content = null;
            if (score < 64) {
                range = "26-63";
                title = "증상 없음";
                content = "사회불안이 낮은 편입니다. 발표나 대인관계에서 큰 어려움을 느끼시지 않습니다. 누구나 약간은 긴장된다는 것을 아시고 자신감 있게 생활하세요.";
            } else if (score < 82) {
                range = "64-81";
                title = "약한 정도의 증상";
                content = "경미한 수준의 사회불안이 있습니다. 이와 같은 점수는 건강한 사람이라면 누구나 느끼게 되는 불안의 수준이라고 할 수 있습니다. 사회적 평가 상황에 대해서 중요하다고 생각하고 계시며, 평가를 좋게 받기 위한 정도의 긴장 정도라 할 수 있습니다. 따라서 사회생활 하시는데 큰 문제는 없을 것이며, 긴장이 된다면 그런 기회를 많이 만들어 거기에 노출하시는 정도로도 큰 도움을 받으실 것입니다.";

            } else if (score < 99) {
                range = "82-98";
                title = "중간 정도의 증상";
                content = "중간 정도의 사회불안을 겪고 계시지만 사회공포증 수준까지는 아닙니다. 이는 개인의 상태에 따라 큰 불편감을 경험하실 수도 있고, 불편하긴 하지만 일상생활을 하시는 데는 큰 지장이 없을 수도 있습니다. 다만 본인이 불편감을 느낀다면 집단치료나 개인상담을 통해서 효과를 보실 수 있습니다. 정확한 자신의 증상을 알고 싶으시다면 상담을 받아 보세요.";

            } else {
                range = "99-140";
                title = "심한 정도의 증상";
                content = "이 점수대는 사회공포증일 가능성이 매우 크니 즉시 상담을 받길 권합니다. 지금 전반적인 사회상황이나 특정한 사회상황(ex. 발표상황)에 공포감을 느끼고 계시며 웬만하면 그 일을 회피하려 하실지도 모릅니다. 사회공포증은 치료하지 않으면 그 증상이 매우 오래 지속되오니 상담을 받아보시고 알맞은 치료를 받으시길 권해 드립니다.";
            }

            Map<String, String> result = new HashMap<>();
            result.put("range", range);
            result.put("title", title);
            result.put("content", content);

            return result;
        }
    }, // 사회 공포/회피
    STRESS("스트레스") {
        @Override
        public Map<String, String> getResult(long score) {
            String range = null, title = null, content = null;
            if (score < 23) {
                range = "11-22";
                title = "스트레스 지수 0%";
                content = "거의 스트레스를 받지 않는 상태, 지금 그대로 잘 유지한다.";
            } else if (score < 25) {
                range = "23-24";
                title = "스트레스 지수 20%";
                content = "약간 스트레스를 받고 있으니 사람과의 교제를 늘리고, 내게 주어진 일을 억지로 맡는 것이 아니라 자신을 위해 한다고 생각하고 임해본다.";

            } else if (score < 28) {
                range = "25-27";
                title = "스트레스 지수 40%";
                content = "비교적 스트레스가 심한 편이므로 스트레스의 원인을 찾아서 적극적으로 맞서보자. 적절한 운동과 고른 영양 섭취, 충분한 수면이 필요하다.";
            } else if (score < 32) {
                range = "28-31";
                title = "스트레스 지수 60%";
                content = "최악은 아니지만 심한 스트레스를 받고 있으므로 우선 신체 상태에 대한 정기적인 검진을 하고, 스트레스의 원인을 찾아 줄이기 위한 적극적 대책이 필요하다.";

            } else {
                range = "32-44";
                title = "스트레스 지수 80%";
                content = "탈진기라 부르는 위험기이다. 신체의 저항력은 떨어지고 피로가 축적되어 탈진기로 넘어가게 된다. 이때는 스트레스에 대한 몸의 방어능력을 잃게 되어 각종 신체 질병이나 정신질환이 나타날 수 있으니 두려워 말고 정신과 상담을 받아본다.";
            }

            Map<String, String> result = new HashMap<>();
            result.put("range", range);
            result.put("title", title);
            result.put("content", content);

            return result;
        }
    }, // 스트레스
    INTERNET_ADDICTION("인터넷 중독") {
        @Override
        public Map<String, String> getResult(long score) {
            String range = null, title = null, content = null;
            if (score < 43) {
                range = "20-42";
                title = "일반사용자군";
                content = "인터넷을 자신의 흥미와 욕구, 목적에 맞게 사용하는 경우로, 인터넷 사용 시간을 적절하게 조절할 수 있습니다. 원하는 목적을 이루고 나면 지체하지 않고 인터넷 접속을 종료할 수 있습니다. 필요에 의해서 인터넷에 접속하고, 당장 인터넷을 사용할 수 없어도 그다지 불편감을 느끼지 않고 참고 기다릴 수 있으며, 인터넷 사용으로 인한 정서, 행동, 직업, 대인관계에 별다른 영향을 받지 않는 건전한 사용자들이 속하는 유형입니다.";
            } else if (score < 54) {
                range = "43-53";
                title = "잠재적 위험사용자 I군(자기관리요망군)";
                content = "목적 외에 인터넷 사용시간이 늘어나기 시작하면서 잠재적인 문제가 발생할 수 있는 가능성을 지니고 있기는 하나, 현재 뚜렷한 문제없이 일상 생활을 유지하는 경우에 해당됩니다. 인터넷을 사용할 수 없는 상황에서 궁금함, 답답함, 약간의 짜증을 경험할 것입니다. 꼭 필요하지 않아도 습관적으로 인터넷에 접속하여 수시로 메일/방명록을 확인하고 속도가 느리면 기다리지 못하고 재접속하거나 반복 클릭을 하는 등 인내심이 부족해집니다. 인터넷을 사용하느라 업무에 지장을 초래할 정도는 아니지만 다소간의 문제가 발생될 수 있습니다(예: 해야 할 일을 미루게 되어 늦어지거나 퇴근 후 남아서 일을 하게 되는 등). 혼자 보내는 시간의 대부분을 인터넷을 통해 해결하려는 경향성을 보이게 됩니다. 인터넷이 생활의 중요한 부분을 차지하는 단계이다. 건강한 인터넷 사용과 사회적, 직업적 기능 수행을 위해 효율적인 시간관리가 필요합니다.";

            } else if (score < 67) {
                range = "54-66";
                title = "잠재적 위험사용자 II군(전문상담요망군)";
                content = "현실의 대인관계가 현저하게 줄어들면서 사이버 세계가 대인관계의 중심이 되며, 이러한 인터넷 과다 사용으로 인해 일상생활에 문제가 발생하고(예: 학교/직장에서 경고를 받거나 지각, 지연) 주변 사람들도 이러한 문제를 인식하기 시작하고 인터넷 사용에 대한 걱정과 염려, 잔소리를 표현합니다. 인터넷을 사용할 수 없는 상황은 회피하게 되고 인터넷을 사용하지 못하는 상황에서 불안, 초조, 짜증, 분노를 경험하며 수면 부족, 피로감, 금전적 소비가 증가할 수 있습니다. 심지어 인터넷 사용과 관련해서 거짓말을 하거나 변명, 합리화하고 자신의 인터넷 사용을 축소/은폐하려는 시도를 보일 것입니다. 최소한의 사회생활을 하지만 인터넷 사용으로 인해 사용 이전에 비해 뚜렷한 생활의 변화가 생기고 인터넷을 조절하기 위해서 외부의 도움이 필요한 단계입니다. 정신건강 관련 분야에서의 전문적인 상담이 필요합니다.";

            } else {
                range = "67-80";
                title = "고위험사용자군(집중치료요망군)";
                content = "인터넷 사용을 자기의 의도대로 적절하게 조절할 수 없는 상태에 이른 경우로, 대부분의 시간을 인터넷에서 보냅니다. 식음을 전폐하고 씻지도 않고 인터넷에 몰두하고 며칠씩 외박을 하기도 하며, 심지어 현실과 사이버 세상을 구분하지 못하고 혼란을 경험합니다. 인터넷을 하지 못하게 되면 심각한 불안, 초조, 짜증, 분노를 경험하고 폭력적인 말과 행동을 보이는 등, 감정 조절에 어려움이 있습니다. 가족갈등이나 대인관계 문제가 빈번하게 발생하고 학사경고를 받거나 직장에서 쫓겨나는 등, 사회생활에 뚜렷한 장애가 있습니다. 현실생활보다는 인터넷이 생활의 중심이 되어, 가족이나 주변사람들을 전혀 고려하지 않고 사회적인 역할을 수행하지 못하며 하루 종일 인터넷에 빠져 있는 상태로 전문적인 치료가 시급한 단계라고 할 수 있습니다. ";
            }

            Map<String, String> result = new HashMap<>();
            result.put("range", range);
            result.put("title", title);
            result.put("content", content);

            return result;
        }
    }, // 인터넷 중독
    EATING_DISORDER("섭식장애") {
        @Override
        public Map<String, String> getResult(long score) {
            String range = null, title = null, content = null;
            if (score < 44) {
                range = "26-43";
                title = "섭식 문제 없음";
                content = "현재 식사나 음식 섭취, 체중, 다이어트 등에 관련된 심각한 문제를 보이지 않습니다";
            } else if (score < 48) {
                range = "44-47";
                title = "섭식 문제의 경향성 있음";
                content = "현재 식사나 음식 섭취, 체중, 다이어트 등과 관련하여 주관적인 문제를 경험하고 있을 가능성이 있습니다. 그 정도가 일상생활에 큰 문제나 지장을 초래할 정도로 심각한 수준은 아니지만, 본인이 느끼는 불편감이나 어려움이 있을 수 있겠습니다. 일시적으로 심리적인 부담감이나 스트레스에 의해 야기되는 상태일 수 있으므로, 스트레스 대처나 다양한 해결 방안을 고려해 보시기를 권유드립니다. 보다 정확한 평가를 위해서는 상담센터를 방문하여 주시기 바랍니다.";

            } else if (score < 54) {
                range = "48-53";
                title = "섭식 문제 있음";
                content = "현재 식사나 음식의 섭취, 체중, 다이어트 등에 관련하여 문제의식을 갖고 있으며, 실질적인 행동적, 신체적인 문제를 경험하고 있을 가능성이 있습니다. 일상생활에 지장이 있을 수 있겠으며, 주관적인 불편감은 보다 더 클 수 있겠습니다. 스스로의 생활 개선에 대한 시도가 필요하며, 상담이나 치료를 통해서도 효과적인 개입이 가능합니다. 보다 정확한 평가와 필요한 상담이나 치료를 원하신다면 상담센터를 방문해 주시기 바랍니다.";

            } else {
                range = "54-130";
                title = "심각한 섭식 문제 있음";
                content = "현재 상당히 심각한 식사 조절, 다이어트나 체중에 대한 강박적 생각, 섭식과 음식에 대한 과도한 몰두와 절제에의 압박 등의 문제를 경험하고 있을 가능성이 높습니다. 그 상태는 매우 심각한 수준일 수 있으며 일상생활에도 큰 지장이 있으며 심리적 불편감이 매우 고조되어 있는 상태인 것으로 나타납니다. 체중의 감소는 없더라도 향후 심각한 문제가 야기될 가능성이 높으므로 상담이나 치료와 같은 전문적인 개입이 시급히 필요합니다. 정확한 평가와 치료적 개입을 위하여 상담센터를 방문해 주시기 바랍니다.";
            }

            Map<String, String> result = new HashMap<>();
            result.put("range", range);
            result.put("title", title);
            result.put("content", content);

            return result;
        }
    }; // 섭식장애

    private final String title;

    PsychologicalTestType(String title) {
        this.title = title;
    }

    public String getTitle() {
        return title;
    }

    public static List<String[]> getList() {
        return List.of(new String[] {COMPULSION.name(), COMPULSION.title},
                new String[] {EVASION.name(), EVASION.title},
                new String[] { STRESS.name(), STRESS.title },
                new String[] { INTERNET_ADDICTION.name(), INTERNET_ADDICTION.title},
                new String[] { EATING_DISORDER.name(), EATING_DISORDER.title });
    }

    public abstract Map<String, String> getResult(long score);
}