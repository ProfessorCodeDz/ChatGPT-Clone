import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

export default function Login({ setShowapp }) {
  const [api, setApi] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    setApi(localStorage.getItem("openaiAPI"));
    inputRef.current.focus();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem("openaiAPI", api);
    setShowapp(true);
  }

  return (
    <LoginStyled onSubmit={handleSubmit}>
      <h1>OpenAI API Key</h1>
      <input
        ref={inputRef}
        onChange={(e) => setApi(e.target.value)}
        type="password"
        value={api}
        placeholder="Openai API ..."
      />
    </LoginStyled>
  );
}

/*-------------------------------*/
const LoginStyled = styled.form`
  width: 100%;
  height: 100vh;
  background-color: #2c3e50;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    margin-bottom: 20px;
    font-size: 50px;
  }
  input {
    height: 50px;
    width: 400px;
    text-align: center;
    font-size: 16px;
    outline: none;
    border: none;
    border-radius: 50px;
  }
`;
