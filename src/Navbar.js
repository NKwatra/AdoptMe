import React from "react";
import { Link } from "@reach/router";
import { css, keyframes } from "@emotion/core";
import colors from "./Colors";

const spin = keyframes`
    to{
        transform: rotate(360deg);
    }
    `;

const Navbar = () => (
  <header
    css={css`
      background-color: ${colors.secondary};
      padding: 15px;
    `}
  >
    <Link to="/">AdoptMe</Link>
    <span
      role="img"
      aria-label="logo"
      css={css`
        font-size: 60px;
        &:hover {
          animation: 1s ${spin} linear infinite;
        }
      `}
    >
      🕊
    </span>
  </header>
);

export default Navbar;
