import styled from "styled-components";

export const ButtonContainer = styled.div`
  position: relative;
  width: 100%;
  padding-right: 10px;
  padding-left: 10px;
  margin-top: 1.5rem !important;
  text-align: center !important;
  @media (min-width: 768px) {
    flex: 0 0 41.66666667%;
    max-width: 41.66666667%;
  }
  @media (min-width: 576px) {
    margin-left: 25%;
  }
  & input[type="submit"] {
    cursor: pointer;
    font-size: 0.9rem;
    background: #2b2b2b;
    padding: 0.6rem 1rem;
    // background: ${({ theme }) => theme.base.darkBg};
    border-radius: 7px;
    overflow: hidden;
    transition: all 0.2s ease-in-out;
    &:hover {
      opacity: 0.8;
    }
  }
`;
