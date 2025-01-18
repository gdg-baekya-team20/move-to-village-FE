// import React from 'react'
import styled from 'styled-components'
import Header from './Header.jsx'
import Button from './Button.jsx'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function Calculate() {
    const navigate = useNavigate();

    const [familyCount, setFamilyCount] = useState(null); // 가구원 수
    const [foodCost, setFoodCost] = useState('');
    const [transportationCost, setTransportationCost] = useState('');
    const [housingCost, setHousingCost] = useState('');

    const handleSubmit = async () => {
        // URL에 데이터를 추가
        const queryParams = new URLSearchParams({
            familyCount: familyCount || '',
            foodCost: foodCost || '',
            transportationCost: transportationCost || '',
            housingCost: housingCost || '',
        }).toString();

        try {
            // 서버로 POST 요청 보내기
            await axios.get(`${import.meta.env.VITE_BACK_URL}/api/relocation/cost?${queryParams}`);
            console.log('데이터 전송 성공:', queryParams);
            navigate('/calculator/result'); // 결과 페이지로 이동
        } catch (error) {
            console.error('데이터 전송 실패:', error);
        }
    };
  return (
    <div>
        <Header />
        <Layout>
        <Container>
            <Title>지방 이주 계산기</Title>
            <Row>
                <Text>가구원 수</Text>
                <Buttons>
                    {[1, 2, 3, 4].map((count) => (
                        <Count
                            key={count}
                            onClick={() => setFamilyCount(count)}
                            isSelected={familyCount === count}
                        >
                            {count}인
                        </Count>
                    ))}
                </Buttons>
            </Row>
            <Row>
                <Text>식비</Text>
                <Input
                            type="number"
                            placeholder="식비를 입력해주세요(한 달 기준)"
                            value={foodCost}
                            onChange={(e) => setFoodCost(e.target.value)}
                        /> 만 원
            </Row>
            <Row>
                <Text>교통비</Text>
                <Input
                            type="number"
                            placeholder="차량 관리비, 대중교통 요금 등(한 달 기준)"
                            value={transportationCost}
                            onChange={(e) => setTransportationCost(e.target.value)}
                        /> 만 원
            </Row>
            <Row>
                <Text>주거비</Text>
                <Input
                            type="number"
                            placeholder="월세, 관리비 등 총 합산(한 달 기준)"
                            value={housingCost}
                            onChange={(e) => setHousingCost(e.target.value)}
                        /> 만 원
            </Row>
        </Container>
        <Button text="결과 확인하기" onClick={handleSubmit}/>
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
    background-color: ${(props) => (props.isSelected ? '#B8C9B5' : 'white')};
    color: ${(props) => (props.isSelected ? 'white' : '#4E6453')};
    border: ${(props) => (props.isSelected ? 'none' : '1.2px solid #4E6453')};
    width: 3.5rem;
    height: 2rem;
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