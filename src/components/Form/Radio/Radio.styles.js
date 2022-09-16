import styled from "styled-components";

export const Wrapper = styled.div`
  display: inline-block;
  width: 90px;
`;

export const Container = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: flex-start;
`;

export const Label = styled.label`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.base.mainColor};
  ${({ disabled }) =>
    disabled &&
    `
      color: ${({ theme }) => theme.base.mainColor} !important; 
      cursor: not-allowed;
   `}
`;

export const Radio = styled.input`
  position: relative;
  display: flex;
  align-items: center;
  -webkit-appearance: none;
  appearance: none;
  margin: 0;
  width: 1.5em;
  height: 1.5em;
  border: 2px solid ${({ theme }) => theme.base.mainColor};
  border-radius: 50%;
  &:after {
    content: "";
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 0.8em;
    height: 0.8em;
    margin: 3px;
  }
  &:checked {
    &::after {
      background-color: ${({ theme }) => theme.base.mainColor};
    }
    &:hover {
      background-color: ${({ theme }) => theme.text.primary};
      border: 2px solid ${({ theme }) => theme.base.mainColor};
      &::after {
        background-color: ${({ theme }) => theme.base.mainColor};
      }
    }
  }
  &:focus {
    outline: 2px solid ${({ theme }) => theme.base.mainColor};
  }
  &:hover {
    &::after {
      background-color: ${({ theme }) => theme.base.mainColor};
    }
  }
  &:disabled {
    cursor: not-allowed;
    border: 2px solid ${({ theme }) => theme.base.mainColor};
    background-color: ${({ theme }) => theme.base.mainColor};
    &:hover {
      &::after {
        background-color: ${({ theme }) => theme.base.mainColor};
      }
    }
    &:checked {
      &::after {
        background-color: ${({ theme }) => theme.base.mainColor};
      }
      &:hover {
        background-color: ${({ theme }) => theme.base.mainColor};
        &::after {
          background-color: ${({ theme }) => theme.base.mainColor};
        }
      }
    }
  }
`;
