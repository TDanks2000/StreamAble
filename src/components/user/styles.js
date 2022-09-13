import styled from "styled-components";

export const UserContainer = styled.div`
  background: ${({ theme }) => theme.base.navBg};
  padding: 1.5rem;
  border-radius: 7px;
  overflow: hidden;
`;

export const FormContainer = styled.form``;

export const InputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -10px;
  margin-left: -10px;
  margin-bottom: 1rem;
  align-items: center;
  height: 35px;
`;

export const InputName = styled.label`
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.text.offWhite};
  padding-top: calc(0.375rem + 1px);
  padding-bottom: calc(0.375rem + 1px);
  margin-bottom: 0.5rem;
  font-size: inherit;
  line-height: 1.5;
  @media (min-width: 768px) {
    flex: 0 0 25%;
    max-width: 25%;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-right: 10px;
  padding-left: 10px;
  flex: 0 0 41.66666667%;
  max-width: 41.66666667%;
  & input {
    display: block;
    width: 100%;
    height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 0.9rem;
    font-size: 1.1rem;
    font-weight: 400;
    line-height: 1.5;
    color: ${({ theme }) => theme.text.secondary};
    background-color: #212121;
    background-clip: padding-box;
    border: 1px solid #303030;
    border-radius: 5px;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  & input[readonly] {
    background-color: #292929;
    opacity: 1;
  }
`;
