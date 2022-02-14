import React from 'react';
import navigation from '_nav';
import styled from 'styled-components';

const AsideWrapper = styled.aside`
  width: 15rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 40;
  height: 100vh;
  padding: 0;
  box-shadow: none;
  background: #2e323a;
  transition: 250ms ease-in-out 50ms;
`;

const AsideHeader = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: #17191e;
  color: white;
  line-height: 55px;
  height: 55px;
  padding-left: 0.75rem;
  flex: 1 1;
`;
const AsideLabel = styled.div`
  color: #ffffff;
`;
const Logo = styled.b``;
const AsideMenu = styled.div``;
const MenuLabel = styled.ul``;

function Aside() {
  return (
    <AsideWrapper id="aside">
      <AsideHeader>
        <AsideLabel>
          MANSCAPED <Logo>Logo</Logo>
        </AsideLabel>
      </AsideHeader>
      <AsideMenu>{navigation.items.map((nav: any, index) => {})}</AsideMenu>
    </AsideWrapper>
  );
}
export default Aside;
