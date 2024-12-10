import React, { useState, useEffect } from "react";
import { styled } from "styled-components";

const EditBtn = styled.button`
  align-items: center;
  display: flex;
  justify-content: center;
`;

const SaveBtn = styled.button`
  align-items: center;
  display: flex;
  justify-content: center;
`;

const MemoContainer = styled.div`
  background-color: #fffcd6;
  border: none;
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  padding: 25px 20px;
  position: relative;
  min-width: 330px;

  button {
    background-color: transparent;
    border: 1px solid #ddd;
    border-radius: 7px;
    bottom: 10px;
    cursor: pointer;
    display: none;
    height: 25px;
    position: absolute;
    right: 10px;
    width: 25px;
  }

  &:hover {
    ${EditBtn} {
      align-items: center;
      display: flex;
      justify-content: center;
      transition: ease-in-out 0.8s;
    }

    ${SaveBtn} {
      align-items: center;
      display: flex;
      justify-content: center;
      transition: ease-in-out 0.8s;
    }
  }
`;

const MemoTextarea = styled.textarea`
  background-color: transparent;
  border: none;
  color: gray;
  font-size: 13px;
  height: 100%;
  margin: 0;
  resize: none;
  padding: 0;
  width: 100%;

  &:focus {
    outline: none;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

const SavedMemo = styled.p`
  font-family: monospace;
  font-size: 13px;
  color: #595959;
  height: 100%;
  margin: 0;
  padding: 0;
  width: 100%;
  white-space: pre-wrap;
  overflow-y: scroll;
  scrollbar-color: transparent transparent;
  scrollbar-width: thin;
`;

const Form = styled.form`
  align-items: center;
  display: flex;
  height: 100%;
`;

function Memo() {
  // a value for typing
  const [content, setContent] = useState<string>("");
  // a data for being stored
  const [memo, setMemo] = useState<string>("");
  const [isEditing, setIsEditing] = useState<boolean>(false);

  // Load memo from localStorage on component mount
  useEffect(() => {
    try {
      const storedData = localStorage.getItem("memo");
      if (storedData) {
        setMemo(storedData); // set the memo state from localStorage
        setContent(storedData); // set the content state for editing
      }
    } catch (error) {
      console.error("Failed to load memo from localStorage", error);
    }
  }, []);

  const handleTypeContent = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  };

  const updateMemo = (event: React.FormEvent): void => {
    event.preventDefault();
    const newMemo = content;
    setMemo(newMemo);
    localStorage.setItem("memo", newMemo);
    setIsEditing(false); // Exit edit mode
  };

  const changeToEditMode = () => {
    setIsEditing(true);
    console.log("isEditing:", isEditing);
  };

  return (
    <MemoContainer>
      {/* CASE: memo data exists */}
      {memo.length > 0 ? (
        <>
          {isEditing ? (
            <Form onSubmit={updateMemo}>
              <MemoTextarea value={content} onChange={handleTypeContent} />
              <SaveBtn type="submit">✔️</SaveBtn>
            </Form>
          ) : (
            <>
              <SavedMemo>{memo}</SavedMemo>
              <EditBtn onClick={changeToEditMode}>🖊️</EditBtn>
            </>
          )}
        </>
      ) : (
        // CASE: no memo data
        <>
          {!isEditing && (
            <>
              <Form onSubmit={updateMemo}>
                <MemoTextarea
                  value={content}
                  onChange={handleTypeContent}
                  placeholder="quick memo"
                />
                <SaveBtn type="submit">✔️</SaveBtn>
              </Form>
            </>
          )}
        </>
      )}
    </MemoContainer>
  );
}

export default Memo;
