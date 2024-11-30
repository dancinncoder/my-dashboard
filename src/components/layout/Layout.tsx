import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { styled } from "styled-components";

const LayoutContaienr = styled.div`
  display: flex;
  position: relative;
  height: 100vh;
`;

function Layout() {
  return (
    <LayoutContaienr>
      <Sidebar />
      <main>
        {/* children content below */}
        <Outlet />
      </main>
    </LayoutContaienr>
  );
}

export default Layout;
