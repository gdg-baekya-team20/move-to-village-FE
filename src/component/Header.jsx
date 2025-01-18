import React from 'react'
import logo from '../assets/logo.png'
import styled from 'styled-components';


function Header() {
  return (
    <div>
        <Container>
            <Logo src={logo} />
        </Container>
    </div>
  )
}

export default Header

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 5rem;
  background-color: #4E6453;
  /* z-index: 100; 다른 요소 위로 올라오도록 설정 */
`;

const Logo = styled.img`
  padding-left: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 130px;
  height: auto;
  &:hover {
    cursor: pointer;
  }
`;