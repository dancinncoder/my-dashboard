import React from "react";
import { styled } from "styled-components";

const ModeToggleContainer = styled.div`
  align-items: center;
  background-color: #3f3f3f;
  border-radius: 25px;
  display: flex;
  height: 30px;
  justify-content: flex-start;
  width: 55px;
  padding: 2px 6px;
`;

const Circle = styled.div`
  background-color: white;
  border-radius: 50%;
  height: 23px;
  width: 23px;
`;

function ModeToggle() {
  return (
    <ModeToggleContainer>
      <Circle></Circle>
    </ModeToggleContainer>
  );
}

export default ModeToggle;
