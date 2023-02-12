import React, { useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import { ChatgptContext } from "../../../contexts/chatgptContext";
import MyMsg from "./MyMsg";
import GptMsg from "./GptMsg";

export default function Chat() {
  const { data } = useContext(ChatgptContext);
  const chatRef = useRef();

  useEffect(() => {
    chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [data]);
  return (
    <ChatStyled ref={chatRef}>
      {data.map((d, i) => (
        <div className="result" key={i}>
          <MyMsg text={d[0]} />
          <GptMsg text={d[1]} />
        </div>
      ))}
    </ChatStyled>
  );
}

const ChatStyled = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-x: hidden;
  overflow-y: scroll;
  scroll-behavior: smooth;
  .result {
    display: flex;
    flex-direction: column;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;
