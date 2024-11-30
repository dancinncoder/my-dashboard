import React from "react";
import Weather from "./Weather";
import Time from "./Time";
import { styled } from "styled-components";

const HomeContainer = styled.div`
  display: flex;
  gap: 40px;
  padding: 30px;
`;

function Home() {
  return (
    <HomeContainer>
      <Weather />
      <Time />
      <div>TodoList</div>
    </HomeContainer>
  );
}

export default Home;
