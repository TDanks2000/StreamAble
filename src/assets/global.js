import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body, html {
        background-color: ${({ theme }) => theme.base.bg};
    }
`;
