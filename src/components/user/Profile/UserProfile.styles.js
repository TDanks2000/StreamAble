import styled from "styled-components";

export const UserProfileContainer = styled.div`
  background: ${({ theme }) => theme.base.navBg};
  padding: 1.5rem;
  border-radius: 7px;
  overflow: hidden;
`;

export const FormContainer = styled.form`
  width: 65%;
`;

export const InputContainer = styled.div`
  font-size: 1.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  & input {
    background: #2b2b2b;
    width: 400px;
    padding: 0.5rem 1rem;
    border-radius: 5px;
  }
  & input[disabled] {
    background: #1f1f1f;
  }
  & input:focus {
    outline: 1.5px solid ${({ theme }) => theme.text.secondary};
  }
  &:last-of-type {
    margin-bottom: 0;
  }
`;
