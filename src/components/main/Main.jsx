import React, { useState } from "react";
import styled from "styled-components";
import Chat from "./chat/Chat";
import Input from "./input/Input";
import { ChatgptContext } from "../../contexts/chatgptContext";

export default function Main() {
  const [data, setData] = useState([]);

  return (
    <MainStyled>
      <ChatgptContext.Provider value={{ data, setData }}>
        <Chat />
        <Input />
      </ChatgptContext.Provider>
    </MainStyled>
  );
}

const MainStyled = styled.main`
  width: 100%;
  height: calc(100vh - 150px);
  display: flex;
  flex-direction: column;
`;
