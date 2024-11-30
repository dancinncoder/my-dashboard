import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { v4 as uuidv4 } from "uuid";

type ShortcutDataType = {
  id: string;
  websiteUrl: string;
  websiteTitle: string;
  isEditing: boolean;
};

const ShortcutContainer = styled.div`
  align-items: center;
  /* border: 1px solid gray; */
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 70vh;
  justify-content: flex-start;
  position: relative;

  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
    list-style-type: none;
    margin: 0;
    justify-content: center;
    padding: 0;
  }
`;

const PopupContainer = styled.form`
  align-items: center;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  position: absolute;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  right: -220px;

  h4 {
    margin: 0;
  }
`;

const PopupLinkInput = styled.input``;

const PopupTitleInput = styled.input``;

const ShortcutAddBtn = styled.button`
  background-color: #e0e0e0;
  border: none;
  border-radius: 11px;
  cursor: pointer;
  font-size: 30px;
  height: 40px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 40px;

  &:hover {
    background-color: #3f3f3f;
    color: white;
    border-radius: 50%;
    transition: ease-in-out 0.3s;
  }
`;

const ShortcutEditBtn = styled.button`
  background-color: white;
  border: none;
  border-radius: 11px;
  cursor: pointer;
  font-size: 25px;
  height: 40px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 40px;

  &:hover {
    background-color: #3f3f3f;
    border-radius: 50%;
    transition: ease-in-out 0.3s;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
`;

const SaveBtn = styled.button`
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  font-size: 14px;
  height: 35px;
  width: 100%;

  &:hover {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    transition: ease-out 0.2s;
  }
`;

const ShortcutItem = styled.li`
  align-items: center;
  background-color: #fff;
  border: none;
  /* border-radius: 50%; */
  border-radius: 11px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  height: 40px;
  justify-content: center;
  width: 40px;

  &:hover {
    border-radius: 50%;
    transition: ease-in-out 0.2s;
  }
`;

const ShortcutItemLink = styled(Link)`
  align-items: center;
  color: #3f3f3f;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  height: 40px;
  justify-content: center;
  text-decoration: none;
  width: 40px;

  span {
    font-size: 23px;
    font-weight: 700;
  }

  p {
    font-size: 13px;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const TitlePopup = styled.div`
  align-items: center;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  max-width: 80px;
  height: 20px;
  padding: 5px 10px;
  position: absolute;
  left: 58px;
`;

const BtnContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
`;

function Shortcut() {
  const [title, setTitle] = useState<string>("");
  const [url, setUrl] = useState<string>("");
  const [isPopupShown, setIsPopupShown] = useState<boolean>(false);
  const [activeShortcutId, setActiveShortcutId] = useState<string | null>(null);
  const [ShortcutList, setShortcutList] = useState<ShortcutDataType[]>(() => {
    try {
      const storedData = localStorage.getItem("shortcut-list");
      return storedData ? JSON.parse(storedData) : [];
    } catch (error) {
      console.error("Failed to load shortcuts from localStorage", error);
      return [];
    }
  });

  const handleTypeUrl = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  };

  const handleTypeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const validateForm = (websiteUrl: string, websiteTitle: string): boolean => {
    const urlRegex =
      /^(https?:\/\/)?(([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}|(\d{1,3}\.){3}\d{1,3})(:[0-9]{1,5})?(\/[^\s]*)?(\?[^\s#]*)?(#[^\s]*)?$/;

    if (!urlRegex.test(websiteUrl)) {
      console.error("Invalid URL format.");
      return false;
    }

    if (websiteTitle.length > 25) {
      console.error("Title length exceeds the maximum of 15 characters.");
      return false;
    }

    return true;
  };

  const AddShortcut = (event: React.FormEvent): void => {
    event.preventDefault();

    const newShortcut = {
      id: uuidv4(),
      websiteUrl: url,
      websiteTitle: title,
      isEditing: false,
    };

    const { websiteUrl, websiteTitle } = newShortcut;

    if (validateForm(websiteUrl, websiteTitle)) {
      const updatedList = [...ShortcutList, newShortcut];
      setShortcutList(updatedList);
      localStorage.setItem("shortcut-list", JSON.stringify(updatedList));
    }

    setTitle("");
    setUrl("");
    setIsPopupShown(false);
  };

  const handleEditToggle = () => {
    setIsPopupShown((isPopupShown) => !isPopupShown);
  };

  const handleMouseEnter = (id: React.SetStateAction<string | null>): void => {
    setActiveShortcutId(id);
  };

  const handleMouseLeave = () => {
    setActiveShortcutId(null);
  };

  return (
    <ShortcutContainer>
      <ul>
        {ShortcutList?.map((item) => {
          const { id, websiteUrl, websiteTitle, isEditing } = item;
          return (
            <ShortcutItem
              key={id}
              onMouseEnter={() => handleMouseEnter(id)}
              onMouseLeave={handleMouseLeave}
            >
              <ShortcutItemLink
                to={websiteUrl ? websiteUrl : ""}
                target="_blank"
              >
                <span>
                  {websiteTitle
                    ? websiteTitle?.slice(0, 1).toUpperCase()
                    : "📡"}
                </span>
                {activeShortcutId === id && (
                  <TitlePopup>
                    <p>{websiteTitle}</p>
                  </TitlePopup>
                )}
              </ShortcutItemLink>
            </ShortcutItem>
          );
        })}
      </ul>

      <BtnContainer>
        <ShortcutAddBtn onClick={handleEditToggle}>+</ShortcutAddBtn>
        <ShortcutEditBtn>⚙️</ShortcutEditBtn>
      </BtnContainer>

      {isPopupShown && (
        <PopupContainer onSubmit={AddShortcut}>
          <h4>Add Shortcut</h4>
          <PopupTitleInput
            onChange={handleTypeTitle}
            value={title}
            type="text"
            placeholder="Insert a title"
            required
          />
          <PopupLinkInput
            onChange={handleTypeUrl}
            value={url}
            type="text"
            placeholder="Insert a link"
            required
          />
          <SaveBtn>Save</SaveBtn>
        </PopupContainer>
      )}
    </ShortcutContainer>
  );
}

export default Shortcut;
