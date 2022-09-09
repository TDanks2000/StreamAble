import styled from "styled-components";

export const FormContainer = styled.form``;

export const InputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -10px;
  margin-left: -10px;
  margin-bottom: 1rem;
  align-items: center;
  & label {
    font-size: 1.1rem;
    color: #777;
    padding-top: calc(0.375rem + 1px);
    padding-bottom: calc(0.375rem + 1px);
    margin-bottom: 0.5rem;
    font-size: inherit;
    line-height: 1.5;
    @media (min-width: 768px) {
      flex: 0 0 25%;
      max-width: 25%;
    }
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
    color: #aaa;
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
