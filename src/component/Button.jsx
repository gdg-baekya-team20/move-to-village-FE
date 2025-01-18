// import React from 'react'
import styled from 'styled-components'

function Button() {
  return (
    <div>
        <ButtonContainer>
            <ButtonContent>결과 확인하기</ButtonContent>
        </ButtonContainer>
    </div>
  )
}

export default Button

const ButtonContainer = styled.div`
`;

const ButtonContent = styled.button`
    width: 25rem;
  height: 4rem;
  background-color: #4E6453;
  border: none;
  border-radius: 20px;
  margin-top: 5rem;
  color: white;
  font-size: 24px;
  font-weight: bold;
`;