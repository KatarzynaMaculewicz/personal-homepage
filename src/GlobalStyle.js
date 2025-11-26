import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
      font-family: "Inter", sans-serif;
      word-break: break-word;
      margin: 0;
      background: ${({ theme }) => theme.background};
      color: ${({ theme }) => theme.text};
      transition: background .3s, color .3s;
    }
`;
