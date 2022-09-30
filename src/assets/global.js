import { rgba } from "polished";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body, html {
        background-color: ${({ theme }) => theme.base.bg};
    }
    &::-webkit-scrollbar {
        width: 15px;
      }
    &::-webkit-scrollbar-track {
        background: ${({ theme }) => theme.base.darkBg};
    }
    &::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.base.offDarkBg};
        border-radius: .25rem;
    }
    &::-webkit-scrollbar-thumb:hover {
        background: ${({ theme }) => rgba(theme.base.offDarkBg, 0.7)};
    }
`;
