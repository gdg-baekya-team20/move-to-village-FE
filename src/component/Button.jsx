// import React from 'react'
import styled from 'styled-components'

function Button({ text, onClick, disabled }) { // text와 onClick을 props로 받음
  return (
    <ButtonContainer>
      <ButtonContent onClick={onClick} disabled={disabled}>{text}</ButtonContent>
    </ButtonContainer>
  )
}

export default Button

const ButtonContainer = styled.div`
`;

const ButtonContent = styled.button`
  width: 25rem;
  height: 4rem;
  background-color: ${(props) => (props.disabled ? '#ccc' : '#4E6453')};
  border: none;
  border-radius: 20px;
  margin-top: 5rem;
  color: ${(props) => (props.disabled ? '#white' : 'white')};
  font-size: 24px;
  font-weight: bold;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    background-color: ${(props) => (props.disabled ? '#ccc' : '#3b5244')};
  }
`;
