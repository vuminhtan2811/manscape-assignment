import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  width: 100%;
  background: #ffffff;
  height: 55px;
  position: fixed;
  left: 0;
  top: 0;
  padding: 0 1rem;
  border: 1px solid #dcdee0;
  box-sizing: border-box;
`;
const Nav = styled.nav`
  width: 100%;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const NavLeft = styled.div``;
const NavRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Link = styled.a``;
const Avatar = styled.div`
  width: 40px;
  height: 40px;
  background: #7676df;
  border-radius: 50%;
  color: #ffffff;
  line-height: 40px;
  text-align: center;
  font-weight: bold;
`;

function Header() {
  return (
    <HeaderWrapper>
      <Nav>
        <NavLeft />
        <NavRight>
          <Avatar>T</Avatar>
        </NavRight>
      </Nav>
    </HeaderWrapper>
  );
}
export default Header;
