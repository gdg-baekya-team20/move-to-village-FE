import React from "react";
import Header from "./Header";
import calculData from "./mock/calculMock.json"; // JSON 데이터를 import
import styled from "styled-components";
import arrow from '../assets/arrow.png';
import Button from '../component/Button.jsx';
import car from '../assets/car.png';
import { useNavigate } from "react-router-dom";

function Result() {
    const data = calculData[0];
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/form');
    }
  return (
    <div>
      <Header />
        <Container> {/* 고유 key 설정 */}
          <LifeCostBox>
            <Box>
              <Small>현재 월 평균 생활비</Small>
              <Cost>{data.currentCost} 만원</Cost> {/* 데이터 출력 */}
            </Box>
            <Arrow src={arrow}/>
            <Box>
              <Small>이주 후 월 평균 생활비</Small>
              <Cost>{data.futureCost} 만원</Cost>
            </Box>
          </LifeCostBox>
          <Percent>생활비를 {data.savedPercentage}% 절약할 수 있어요!</Percent>
          <ContentBox>
              <Content>
                <Image src={car} />
                <Explain>1년이면 명품백 하나를 <br />구입할 수 있는 돈이에요!</Explain>
              </Content>
              <Content>
                  <Image src={car} />
                  <Explain>10년이면 자동차 한 대를 <br />구입할 수 있는 돈이에요!</Explain>
              </Content>
              <Content>
                  <Image src={car} />
                  <Explain>20년이면 아파트 하나를 <br />구입할 수 있는 돈이에요!</Explain>
              </Content>
        </ContentBox>
        <Button text="이주 지역 추천받기" onClick={handleClick} />
        </Container>
    </div>
  );
}

export default Result;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const LifeCostBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
    gap: 8rem;

`;

const Small = styled.div`
    color: #595959;
    font-size: 18px;
`;

const Cost = styled.div`
    font-size: 40px;
    color: #B8C9B5;
    font-weight: bold;
    margin-top: 10px;
`;

const Box = styled.div`

    
`;

const Arrow = styled.img`
    width: 8rem;
    height: auto;
`;

const Percent = styled.div`
    margin-top: 5rem;
    color: #4E6453;
    font-size: 24px;
    font-weight: 600;
`;

const Image = styled.img`
    width: 10rem;
    height: auto;
`;

const Explain = styled.div`
    font-size: 18px;
`;

const Content = styled.div`
`;

const ContentBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 10rem;
    margin-top: 5rem;
`;