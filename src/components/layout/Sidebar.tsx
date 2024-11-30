import React from "react";
import { styled } from "styled-components";
import { ReactComponent as Logo } from "../../assets/layout/logo2.svg";
import { Link } from "react-router-dom";
import ModeToggle from "./ModeToggle";
import Shortcut from "./Shortcut";

const SidebarContainer = styled.div`
  align-items: center;
  /* background-color: #a8d5ba; */
  background-color: #ececec;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: space-between;
  position: relative;
  top: 0;
  padding: 30px 10px;
  width: 60px;
`;

const Line = styled.div`
  border: none;
  border-bottom: 1px solid #ddd;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  height: 1px;
  width: 50px;
`;

const LogoContainer = styled(Link)`
  align-items: center;
  /* border: 1px solid blue; */
  cursor: pointer;
  display: flex;
  justify-content: center;
  width: 50px;
`;

const ToggleContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

const Nav = styled.nav`
  position: relative;
  margin-top: 40px;
`;

export default function Sidebar() {
  return (
    <SidebarContainer>
      <LogoContainer to="/">
        <Logo width={50} height={50} />
      </LogoContainer>
      {/* <Line></Line> */}
      <Nav>
        <Shortcut />
      </Nav>
      <ToggleContainer>
        <ModeToggle />
      </ToggleContainer>
    </SidebarContainer>
  );
}
