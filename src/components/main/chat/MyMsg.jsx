import React from "react";
import styled from "styled-components";

export default function MyMsg({ text }) {
  return (
    <MyMsgStyled onClick={() => navigator.clipboard.writeText(text)}>
      {text}
    </MyMsgStyled>
  );
}

const MyMsgStyled = styled.div`
  padding: 15px;
  background-color: #16a085;
  color: white;
  width: fit-content;
  margin: 15px 0;
  max-width: 70%;
  word-wrap: break-word;
  cursor: copy;
  transition: 0.2s ease-in-out;
  align-self: flex-end;
  border-radius: 20px;
  border-top-right-radius: 0;
  &:hover {
    background-color: #096954;
  }
`;
