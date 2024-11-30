import React from "react";
import { ReactComponent as Logo } from "../../assets/layout/logo2.svg";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const HeaderContainer = styled.div`
  align-items: center;
  height: 50px;
  background-color: white;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);
  display: flex;
  gap: 10px;
  justify-content: flex-start;
  padding: 5px 10px;
  position: sticky;
  top: 0;
  z-index: 99999;

  p {
    font-size: 15px;
    font-weight: 670;
  }
`;

const LogoContainer = styled(Link)`
  align-items: center;
  /* border: 1px solid blue; */
  cursor: pointer;
  display: flex;
  justify-content: center;
  width: 40px;
`;

const SearchBar = styled.input`
  background-color: #f2f1f1;
  border: none;
  border-radius: 20px;
  font-size: 12px;
  height: 25px;
  margin-left: 30px;
  padding: 3px 15px;
  width: 350px;

  &:focus {
    outline: none;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo width={35} height={35} />
      </LogoContainer>
      <p>My Dashboard</p>
      <SearchBar placeholder="Search for todos" />
    </HeaderContainer>
  );
}

export default Header;
