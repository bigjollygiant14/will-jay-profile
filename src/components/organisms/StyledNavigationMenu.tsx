'use client';

import styled from "styled-components";
import NavigationMenu from "./NavigationMenu";

export default styled(NavigationMenu)`
  .hamburger-menu {
    background: none;
    border: none;
    cursor: pointer;
  }

  .hamburger-menu svg {
    fill: #fff;
  }
`;
