# 2025 GDGoC 연합 해커톤 - 이도향촌(離都向村) : 지방 이주 계산기 & 이주 지역 추천 프로젝트

<aside>
😀

수도권 집중을 해결하기 위해, 지방으로 이주했을 때의 예상 경제적 이점을 체험할 수 있게 하고, 조건을 입력 받아 AI 분석을 통한 적절한 이주 지역을 추천해주는 프로젝트입니다.

</aside>

## 프로젝트 개요

<img width="840" alt="Image" src="https://github.com/user-attachments/assets/dad34940-2626-49f0-8bf0-d0a88dde2b70" />

한국의 인구밀도는 OECD 국가 중 가장 높지만, 대부분의 인구가 서울에 집중되어 지역별 인구수 불균형이 심각한 상황이다. 이러한 상황에서 **수도권 집중 문제**를 해결하기 위한 가장 현실적인 해결책은 **지역의 경제적 이점을 어필**하는 것이라고 생각하여 경제적 이점을 가볍게 보여주어 **지방 이주에 관심을 갖게 하는 것을 목적**으로 이도향촌 프로젝트를 기획하게 되었다.

---

## 기능

### 1. 지방 이주 계산기

<img width="1650" alt="Image" src="https://github.com/user-attachments/assets/03122c7f-e5de-492a-aab5-dfd4e7f96626" />
<img width="1652" alt="Image" src="https://github.com/user-attachments/assets/25cca7b2-0b1d-419b-bd49-e1bff580e0db" />
가구원 수, 식비, 교통비, 주거비와 같은 기본적인 생활비를 입력하면 지방으로 이주했을 때 경제적으로 얼마나 절약할 수 있는지 보여준다.

### 2. 이주 지역 추천 기능

<img width="1650" alt="Image" src="https://github.com/user-attachments/assets/efc6edf7-ac45-40cf-9d44-a9ac604b4cec" />
<img width="1650" alt="Image" src="https://github.com/user-attachments/assets/56fe8683-7430-4c49-bf20-375c38e54c9d" />

이주 목적, 삶의 우선순위(1, 2, 3순위), 추가 조건을 입력받고 입력받은 데이터를 바탕으로 AI 기반 분석을 통해 적절한 이주 지역을 추천해주고, 이주 시의 이점을 더 구체적으로 보여준다. 

추가적으로 해당 지역에 대한 간단한 설명과, 이주 관련 페이지 하이퍼링크를 연결하여 지역 이주를 적극적으로 유도한다.

---

## 구현

**프론트**

프로젝트의 특성을 고려하여 React.js를 기반으로 웹 애플리케이션을 구현하였다. 사용자로부터 필요한 정보를 입력받고, REST API를 활용해 서버와 데이터를 주고받을 수 있도록 설계하였다. 특히, 서버에서 받은 응답 데이터를 다음 페이지에서도 효과적으로 활용할 수 있도록 React Router의 useLocation을 사용하여 상태를 전달하고, 이를 통해 페이지 간 데이터 의존성을 관리하였다.

**백엔드**

백엔드 구현은 Java 17 Spring Boot를 기반으로 AWS에 배포하여, 안정적이고 확장 가능한 시스템을 구축하였다.  EC2 두 인스턴스를 할당받아 각자 Springboot WAS와 AI 모델 서버를 배포하였다. 이미지 등 외부 파일은 S3에 저장하며 MySQL에 관계형 데이터를 저장한다. 프론트에 전달되는 데이터 중 산술적인 계산을 Springboot에서 처리하였으며, 지역 추천 API의 경우 AI 서버와 HTTP 통신을 통해 받은 응답을 프로세싱하여 프론트엔드에 전달한다.

**AI 모델**

AI 기반 모델은 KoGPT2 언어 모델을 Fine-tuning하여 특정 도메인의 텍스트 생성 능력을 강화하였다.

학습용 데이터 90%와 검증용 데이터 10%로 분할하여서 파인튜닝하였다. 이렇게 파인튜닝 된 KoGpt모델을 활용하여 이주목적, 우선순위, 추가조건을 프롬프트에 받아 이를 기반하여 추천지역과 이유에 관한 텍스트가 생성된다. 프롬프트에 기반확률 기반 샘플링을 통해 top_k 와 top_p 설정으로 생성 텍스트의 다양성과 합리성을 조율하였다. 특정 데이터를 기반으로 학습된 모델이므로 도메인에 최적화된 결과를 제공하도록 하였다. 이 방식은 단순한 매칭 알고리즘이 아니라 ****조건 기반 텍스트 생성을 통해 사용자 요구에 맞는 설명을 제공한다.

**AI서버 구성**

AI 서버는 Ubuntu환경에서 구축되었으며, Python 3.12을 기반으로 실행된다. FastAPI를 활용하여 API 서버를 구성하였으며, uvicorn을 통해 비동기 방식으로 서버를 실행한다. AI서버는 백엔드 서버로부터 JSON 형식의 데이터를 받아 동적으로 프롬프트를 생성하고 KoGPT2 모델에 전달하여 결과를 반환한다.

모델은 Hugging Face의 `transformers` 라이브러리를 활용하여 로드되며, 텍스트 생성을 위한 파라미터로 `max_length`, `top_k`, `top_p` 등을 동적으로 설정할 수 있다. 요청의 처리 속도와 효율성을 높이기 위해 PyTorch 기반으로 모델을 최적화하였고, CPU 전용 환경에서도 안정적으로 동작하도록 구성했다.

서버와 클라이언트 간 통신은 HTTP POST 요청을 통해 이루어지며, 요청 데이터에는 사용자의 목적과 우선순위가 포함된다. 이에 기반하여 AI 모델이 맞춤형 텍스트를 생성하고, 클라이언트에 JSON 형식으로 응답한다. 

**데이터셋 구성 및 점수화**

지역별 특징을 보기 위해 지역별 교통, 문화, 의료시설, 물가에 대한 데이터를 수집하여 점수화하였다. 

대표로 부산, 대구 광주, 대전, 울산,강릉, 제주, 전주, 춘천, 포항, 여수의 데이터를 수집하였다.

**교통**으로는 지역별 버스 정류장 위치정보를 수집하여 정류장 밀도를 지역별로 수치화하였고 지하철에 대한 데이터 또한 수집하였다. 이를 기반으로 점수화가 이루어졌다. 밀도를 지역별로 정규화한 후, 지하철 유무에 따라 가중치를 부여하여 점수화하였다.

**문화**로는 지역별 건물 연면적/연간이용자수를 계산하여 지역 정보별 영향력 지수를 통해 문화점수를 부여했다.

**의료시설**으로는 지역별 병원과 약국의 개수를 구한 후, 지역별 병원 개수를 정규화하여, 병원이 가장 적은 지역은 40점, 가장 많은 지역은 100점으로 환산하고, 나머지 지역은 병원 개수에 비례한 점수를 부여하였다.

**물가**는 지역별 평균 식비를 계산하여 물가 점수를 부여했다.

---

## 사회적 의의

- 지방 소멸 문제와 수도권 집중 현상이라는 현대 사회의 주요 이슈에 대해 **데이터 기반의 해결 방안**을 제시하였다.
- 개인의 경제적 선택과 지역 균형 발전이라는 **사회적 가치**를 연결하는 프로젝트로 사용자가 더 나은 결정을 내릴 수 있도록 돕는다.

> **Reference**
> 
> 
> [전국버스정류장 위치정보.numbers](https://prod-files-secure.s3.us-west-2.amazonaws.com/2b8f301c-d10b-4f79-aabe-2154552fd005/8b8f3234-ef0c-45d2-808e-521214b4aeb2/%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%80%E1%85%AE%E1%86%A8%E1%84%87%E1%85%A5%E1%84%89%E1%85%B3%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%85%E1%85%B2%E1%84%8C%E1%85%A1%E1%86%BC_%E1%84%8B%E1%85%B1%E1%84%8E%E1%85%B5%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%87%E1%85%A9.numbers)
> 
> https://www.reb.or.kr/r-one/portal/stat/easyStatPage/A_2024_00025.do
> 
> http://landpriceinfo.com/aptrent?&loc_cd=11&xaxis=time&type=rent
> 
> https://www.index.go.kr/unity/potal/indicator/IndexInfo.do?clasCd=10&idxCd=F0185
> 
> https://kosis.kr/visual/eRegionJipyo/themaJipyo/eRegionJipyoThemaJipyoView.do?themaId=A_01_04&menuThemaId=A_01_04_02&jipyoId=5697_7164&jipyoNm=&graphTypeGbn=THEMA&statId=&regionChkVal=00%40&chartGbn=DTypeChart&selectPrdDe=&themaGbn=subjectJipyo&detailJipyoId=&themaGbnMenu=subjectJipyo&chooseYm=&jipyo1PrdDe=03e1d3e1d&AreaChoiceCombo=A_01_04
> https://www.numbeo.com/cost-of-living/
>
---

## 정보
- 인원 : 5명(FE : 1명, BE : 3명, AI : 1명)
- 기간 : 16시간
