import React, { useState } from 'react'
import Header from './Header'
import styled from 'styled-components'
import Button from './Button'
import { useNavigate } from 'react-router-dom'

function Input() {

    const navigate = useNavigate();
    const [purpose, setPurpose] = useState("");
    const [priority1, setPriority1] = useState('');
      const [priority2, setPriority2] = useState('');
      const [priority3, setPriority3] = useState('');

    const handleSelectChange = (event) => {
        setPurpose(event.target.value); // 드롭다운 값 변경 처리
      };

    const handleClick = () => {
        navigate('/form/result');
    }
    
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
                    <option value="farming">귀농</option>
                    <option value="job_startup">일자리/창업</option>
                    <option value="quality_of_life">삶의 질(건강, 가족과의 시간)</option>
                    <option value="retirement">귀향 및 은퇴</option>
                    <option value="economic_reason">경제적 이유(생활비, 주거비 절감)</option>
                    <option value="others">기타</option>
              </Select>
            </Row>
            <PriorityBox>
            <Row>
              <Text>Q. 삶의 우선순위</Text>
                <Select value={priority1} onChange={(event) => setPriority1(event.target.value)}>
                  <option value="" disabled>
                    1순위
                  </option>
                  <option value="transportation">교통</option>
                  <option value="culture">문화</option>
                  <option value="healthcare">의료시설</option>
                  <option value="nature">자연환경</option>
                  <option value="cost_of_living">물가</option>
                </Select>
              </Row>
              <Row>
                <Text></Text>
                <Select value={priority2} onChange={(event) => setPriority2(event.target.value)}>
                  <option value="" disabled>
                    2순위
                  </option>
                  <option value="transportation">교통</option>
                  <option value="culture">문화</option>
                  <option value="healthcare">의료시설</option>
                  <option value="nature">자연환경</option>
                  <option value="cost_of_living">물가</option>
                </Select>
              </Row>
              <Row>
                <Text></Text>
                <Select value={priority3} onChange={(event) => setPriority3(event.target.value)}>
                  <option value="" disabled>
                     3순위
                  </option>
                  <option value="transportation">교통</option>
                  <option value="culture">문화</option>
                  <option value="healthcare">의료시설</option>
                  <option value="nature">자연환경</option>
                  <option value="cost_of_living">물가</option>
                </Select>
              </Row>
              </PriorityBox>
        
        <Row>
            <Text>Q. 추가 조건</Text>
            <Area />
        </Row>
        <Button text="추천 지역 결과보기" onClick={handleClick} />
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
    margin-bottom: 5rem;
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
    width: 16rem;
    height: 8rem;
    color: #000000; /* 텍스트 색상 변경 */
    border-style: solid;
    border-width: 1.2px;
    border-color: #ccc;
    resize: none;
    overflow: auto;
    font-size: 16px; /* 글꼴 크기 */
    border-radius:5px;
    margin-bottom: -2rem;

    ::placeholder {
        color: #A9A9A9; /* placeholder 색상 */
    }

    &:focus {
        outline: none; /* 포커스 시 기본 스타일 제거 */
        border-color: #4E6453; /* 포커스 시 테두리 색상 변경 */
    }
`;
