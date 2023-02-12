import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterStyled>
      <h3>Made with ❤️ by Riad.Z</h3>
    </FooterStyled>
  );
}

const FooterStyled = styled.footer`
  width: 100%;
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
