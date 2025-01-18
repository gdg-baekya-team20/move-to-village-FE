// import React from 'react'
import styled from 'styled-components'
import Header from './Header.jsx'
import Button from './Button.jsx'

function Calculate() {
  return (
    <div>
        <Header />
        <Layout>
        <Container>
            <Title>지방 이주 계산기</Title>
            <Row>
                <Text>가구원 수</Text>
                <Buttons>
                    <Count>1인</Count>
                    <Count>2인</Count>
                    <Count>3인</Count>
                    <Count>4인</Count>
                </Buttons>
            </Row>
            <Row>
                <Text>식비</Text>
                <Input placeholder='식비를 입력해주세요(한 달 기준)'/> 만 원
            </Row>
            <Row>
                <Text>교통비</Text>
                <Input placeholder='차량 관리비, 대중교통 요금 등(한 달 기준)'/> 만 원
            </Row>
            <Row>
                <Text>주거비</Text>
                <Input placeholder='월세, 관리비 등 총 합산(한 달 기준)'/> 만 원
            </Row>
        </Container>
        <Button />
        </Layout>
    </div>
  )
}

export default Calculate

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
`;

const Title = styled.div`
    font-size: 36px;
    margin-top: 8rem;
    margin-bottom: 5rem;
    color: #464646;
    font-weight: bold;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    /* justify-content: flex-start; */
`;

const Text = styled.div`
    width: 7rem;
    font-size: 20px;
    text-align: center;
`;

const Count = styled.button`
    background-color: white;
    width: 3.5rem;
    height: 2rem;
    border-style: solid;
    border-width: 1.2px;
    border-color: #4E6453;
    color: #4E6453;
    border-radius: 10px;
    font-size: 18px;

`;

const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
`;

const Input = styled.input`
    border: solid 1px #121212;
    border-width: 0 0 1px 0;
    width: 15rem;
    padding: 10px;
    margin-right: 3px;

    &::placeholder{
        color: #A9A9A9;
        margin-bottom: 10px;
    }
`;