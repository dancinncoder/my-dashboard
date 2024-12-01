import React from "react";
import { styled } from "styled-components";

const AssistantContainer = styled.div`
  background-color: aliceblue;
  border: none;
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  height: 150px;
  padding: 25px;
  width: 300px;
`;
function Assistant() {
  return <AssistantContainer>Assistant</AssistantContainer>;
}

export default Assistant;