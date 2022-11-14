import styled from "styled-components";

export const UserActionsContainer = styled.div`
  // min-width: 20%;
  display: flex;
  flex: 1;
  flex-direction: row;
  gap: 0.5rem;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 0;
`;

export const ActionContainer = styled.div`
  font-size: 1.6rem;
  transition: all 0.25s ease-in-out;
  cursor: pointer;
  color: ${({ theme }) => theme.text.offWhite};
  &:hover {
    color: ${({ theme }) => theme.text.secondary};
    opacity: 0.8;
  }
  & * {
    display: flex;
    align-items: center;
  }
  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;
