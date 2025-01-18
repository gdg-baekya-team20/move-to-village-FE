import { useState } from 'react'
import Header from './Header'
import styled from 'styled-components'
import Button from './Button'
import { useNavigate } from 'react-router-dom'

function Input() {

    const navigate = useNavigate();
    const [purpose, setPurpose] = useState("");
    const [customPurpose, setCustomPurpose] = useState('');

    const [priority1, setPriority1] = useState('');
      const [priority2, setPriority2] = useState('');
      const [priority3, setPriority3] = useState('');
      const [additionalConditions, setAdditionalConditions] = useState('');

      const isFormValid = purpose && priority1 && priority2 && priority3 && additionalConditions;

    const handleSelectChange = (event) => {
        setPurpose(event.target.value);

        // "기타"를 선택하면 customPurpose 초기화
        if (event.target.value !== '기타') {
            setCustomPurpose('');
        }
    };

    const handleCustomPurposeChange = (event) => {
        setCustomPurpose(event.target.value);
    };

      const handleTextAreaChange = (event) => {
        setAdditionalConditions(event.target.value);
      };
    

      const handleClick = async () => {
        // 요청 데이터 생성
        const requestData = {
          purpose,
          priorities: [priority1, priority2, priority3],
          additionalConditions,
        };
    
        try {
          // POST 요청 보내기
          const response = await fetch(`${import.meta.env.VITE_BACK_URL}/api/location/recommendation`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestData),
          });
    
          if (!response.ok) {
            throw new Error('POST 요청 실패');
          }
    
          const result = await response.json();
          console.log('서버 응답:', result);
    
          // 성공 시 결과 페이지로 이동
          navigate('/form/result', {state : {data: response.data}});
        } catch (error) {
          console.error('POST 요청 중 에러 발생:', error);
        }
      };
    
  return (
    <div>
        <Header />
        <Container>
            <Title>이주 지역 추천 받기</Title>
            <Row>
                <Text>Q. 이주 목적</Text>
                <Select value={purpose} onChange={handleSelectChange}>
                    <option value="" disabled>
                      선택하세요
                    </option>
                    <option value="귀농">귀농</option>
                    <option value="일자리">일자리</option>
                    <option value="삶의질">삶의 질</option>
                    <option value="귀향및은퇴">귀향 및 은퇴</option>
                    <option value="기타">기타</option>
              </Select>
            </Row>
            <Row>
                <Text></Text>
              {purpose === '기타' && (
                <Area
                    type="text"
                    placeholder="이주 목적을 입력하세요"
                    value={customPurpose}
                    onChange={handleCustomPurposeChange}
                />
            )}
            </Row>
            <PriorityBox>
                
            <Row>
              <Text>Q. 삶의 우선순위</Text>
                <Select value={priority1} onChange={(event) => setPriority1(event.target.value)}>
                  <option value="" disabled>
                    1순위
                  </option>
                  <option value="교통">교통</option>
                  <option value="문화">문화</option>
                  <option value="의료시설">의료시설</option>
                  <option value="자연환경">자연환경</option>
                  <option value="물가">물가</option>
                </Select>
              </Row>
              <Row>
                <Text></Text>
                <Select value={priority2} onChange={(event) => setPriority2(event.target.value)}>
                  <option value="" disabled>
                    2순위
                  </option>
                  <option value="교통">교통</option>
                  <option value="문화">문화</option>
                  <option value="의료시설">의료시설</option>
                  <option value="자연환경">자연환경</option>
                  <option value="물가">물가</option>
                </Select>
              </Row>
              <Row>
                <Text></Text>
                <Select value={priority3} onChange={(event) => setPriority3(event.target.value)}>
                  <option value="" disabled>
                     3순위
                  </option>
                  <option value="교통">교통</option>
                  <option value="문화">문화</option>
                  <option value="의료시설">의료시설</option>
                  <option value="자연환경">자연환경</option>
                  <option value="물가">물가</option>
                </Select>
              </Row>
              </PriorityBox>
        
        <Row>
            <Text>Q. 추가 조건</Text>
            <Area value={additionalConditions} onChange={handleTextAreaChange} placeholder="추가 조건을 입력하세요" />
        </Row>
        <ButtonContainer>
        <Button text="추천 지역 결과보기" onClick={handleClick} disabled={!isFormValid}/>
        </ButtonContainer>
        </Container>
    </div>
  )
}

export default Input

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
`;

const Title = styled.div`
    font-size: 36px;
    margin-top: 5rem;
    margin-bottom: 3rem;
    color: #464646;
    font-weight: bold;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
`;

const Text = styled.div`
  font-size: 18px;
  width: 10rem;
  color: #505050;
  font-weight: 500;
`;

const Select = styled.select`
  width: 16rem;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 16px;
  background-color: #fff;
  color: #696969;

  &:focus {
    outline: none;
    border-color: #4E6453;
  }
`;

const PriorityBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-top: 2rem;
    margin-bottom: 3rem;
`;

const Area = styled.textarea`
    width: 15rem;
    height: 5rem;
    color: #000000; /* 텍스트 색상 변경 */
    border-style: solid;
    border-width: 1.2px;
    border-color: #ccc;
    resize: none;
    overflow: auto;
    font-size: 16px; /* 글꼴 크기 */
    border-radius:5px;
    /* margin-bottom: -1rem; */
    padding: 5px;

    ::placeholder {
        color: #b7b4b4; /* placeholder 색상 */
    }

    &:focus {
        outline: none; /* 포커스 시 기본 스타일 제거 */
        border-color: #4E6453; /* 포커스 시 테두리 색상 변경 */
    }
`;

const ButtonContainer = styled.div`
  margin-top: -3rem;  
`;
