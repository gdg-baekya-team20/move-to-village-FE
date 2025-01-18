// import React from 'react'
import styled from 'styled-components'

function Button({ text, onClick }) { // text와 onClick을 props로 받음
  return (
    <ButtonContainer>
      <ButtonContent onClick={onClick}>{text}</ButtonContent>
    </ButtonContainer>
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

  &:hover {
    background-color: #3B5043; /* Hover 효과 추가 */
    cursor: pointer;
  }
`;
