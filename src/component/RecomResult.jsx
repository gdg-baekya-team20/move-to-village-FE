import React from 'react'
import styled from 'styled-components';
import Header from './Header';

function RecomResult() {
  return (
    <div>
        <Header />
        <Container>
            <Text>추천 지역은</Text>
        </Container>
    </div>
  )
}

export default RecomResult

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Text = styled.div`

`;


