import React, { useState } from "react";
import styled from "styled-components";

export default function Header() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      document.body.style.background = "#e2e2e2";
      document.body.style.color = "black";
    } else {
      setTheme("dark");
      document.body.style.background = "#2c3e50";
      document.body.style.color = "white";
    }
  };

  return (
    <HeaderStyled>
      <h1>ChatGPT Clone</h1>
      <a
        style={{ color: theme === "light" ? "black" : "white" }}
        href="https://riadz.pages.dev/"
        target="_blank"
      >
        <h2>riadz.pages.dev</h2>
      </a>
      <div onClick={toggleTheme} className="theme">
        {theme === "dark" ? "🌙" : "🌞"}
      </div>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.header`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    text-decoration: none;
    color: white;
    transition: 0.5s ease-out;
  }
  .theme {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    cursor: pointer;
    user-select: none;
  }
`;
