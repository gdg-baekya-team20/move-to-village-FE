import React from 'react'
import styled from 'styled-components'

function Start() {
  return (
    <div>
        <Background>
            <Title><Shadow>이도향촌(離都向村)</Shadow> <br /> : 서울을 떠나 지방에서 산다면?</Title>
            <Text>지방 이주 시 돈을 얼마나 절약할 수 있는지 알려주고, <br />나에게 맞는 지역을 추천해주는 서비스입니다</Text>
            <Button>시작하기</Button>
        </Background>
    </div>
  )
}

export default Start

const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #4E6453;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  text-align: center;
`;

const Title = styled.div`
    color : white;
    margin-top: 15rem;
    font-weight: bold;
    font-size: 45px;
    line-height: 1.5;
`;

const Shadow = styled.span`
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const Text = styled.div`
    text-align: center;
    font-size: 36px;
    color: #B8C9B5;
    margin-top: 5rem;
    font-weight: bold;
`;

const Button = styled.button`
  width: 25%;
  height: 4rem;
  background-color: white;
  border: none;
  border-radius: 20px;
  margin-top: 5rem;
  color: #4E6453;
  font-size: 24px;
  font-weight: bold;
`;