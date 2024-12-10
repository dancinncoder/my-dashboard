import React from "react";
import { styled } from "styled-components";

const TodoBoardContainer = styled.div`
  background-color: #ffffff;
  border: none;
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  gap: 60px;
  height: 350px;
  padding: 25px 20px;
  position: relative;
  width: 750px;
`;

const TodoBriefView = styled.div`
  border: 1px solid red;
  padding: 10px;
  width: 45%;
`;

const TodoSearchInput = styled.input`
  background-color: #f2f1f1;
  border: none;
  height: 25px;
  padding: 2px;
  width: 100%;
`;

const TodoListContianer = styled.div``;

const TodoDetailView = styled.div`
  border: 1px solid blue;
  width: 55%;
`;

function TodoBoard() {
  return (
    <TodoBoardContainer>
      <TodoBriefView>
        <TodoSearchInput />
        <p>Today</p>
        <TodoListContianer></TodoListContianer>
      </TodoBriefView>
      <TodoDetailView></TodoDetailView>
    </TodoBoardContainer>
  );
}

export default TodoBoard;
