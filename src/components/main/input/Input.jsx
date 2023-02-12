import React, { useState, useContext, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { ChatgptContext } from "../../../contexts/chatgptContext";
import { generatePrompts } from "../../../utils/openai";

export default function Input() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();

  const { setData, data } = useContext(ChatgptContext);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    inputRef.current.value = "";
    const result = await generatePrompts("text-davinci-002", prompt);
    setData([...data, [prompt, result]]);
    setLoading(false);
  }
  return (
    <InputStyled onSubmit={handleSubmit}>
      <input
        placeholder="Enter your prompt..."
        ref={inputRef}
        onChange={(e) => setPrompt(e.target.value)}
        type="text"
      />
      {loading && (
        <div className="spinner">
          <div className="bar"></div>
          <div className="circle"></div>
        </div>
      )}
    </InputStyled>
  );
}

const spinnerAnimation = keyframes`
    0% {transform:translate(-50%, -50%) rotate(0deg)}
    100% {transform:translate(-50%, -50%) rotate(360deg)}
`;
const InputStyled = styled.form`
  position: relative;
  margin-top: 20px;
  input {
    height: 50px;
    width: 100%;
    padding-left: 20px;
    font-size: 15px;
    outline: none;
    border-radius: 50px;
    border: none;
  }
  .spinner {
    width: 40px;
    height: 40px;
    position: absolute;
    top: 50%;
    right: 5px;
    border-radius: 50%;
    transform: translateY(-50%);
    overflow: hidden;
    .circle {
      width: 80%;
      height: 80%;
      background-color: white;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .bar {
      width: 55px;
      height: 20px;
      background-color: #16a085;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: rotate(45deg);
      transform-origin: center;
      animation-name: ${spinnerAnimation};
      animation-duration: 0.5s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }
  }
`;
