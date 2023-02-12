import React from "react";
import styled from "styled-components";

export default function GptMsg({ text }) {
  return (
    <GptMsgStyled onClick={() => navigator.clipboard.writeText(text)}>
      {text}
    </GptMsgStyled>
  );
}

const GptMsgStyled = styled.div`
  padding: 15px;
  background-color: white;
  color: #383838;
  width: fit-content;
  margin: 15px 0;
  max-width: 70%;
  word-wrap: break-word;
  cursor: copy;
  transition: 0.2s ease-in-out;
  border-radius: 20px;
  border-top-left-radius: 0;
  &:hover {
    background-color: #dbdbdb;
  }
`;
