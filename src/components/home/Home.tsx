import React from "react";
import Weather from "./Weather";
import Time from "./Time";
import { styled } from "styled-components";
import Assistant from "./Assistant";
import TodoBoard from "./TodoBoard";
import SubNav from "./Memo";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 30px;
`;

const FirstRow = styled.div`
  display: flex;
  gap: 40px;
`;

const SecondRow = styled.div`
  display: flex;
  gap: 40px;
`;

function Home() {
  return (
    <HomeContainer>
      <FirstRow>
        <Assistant />
        <Time />
        <Weather />
        <SubNav />
      </FirstRow>
      <SecondRow>
        <TodoBoard />
      </SecondRow>
    </HomeContainer>
  );
}

export default Home;
