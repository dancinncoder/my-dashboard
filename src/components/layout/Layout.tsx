import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { styled } from "styled-components";
import Header from "./Header";

const LayoutContaienr = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100vh;
`;

const Main = styled.main`
  display: flex;
  height: 100%;
`;

function Layout() {
  return (
    <LayoutContaienr>
      <Header />
      <Main>
        <Sidebar />
        {/* children content below */}
        <Outlet />
      </Main>
    </LayoutContaienr>
  );
}

export default Layout;
