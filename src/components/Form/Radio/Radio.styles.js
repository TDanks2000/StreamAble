import styled from "styled-components";

export const Container = styled.div`
  display: inline-flex;
  margin-right: 1rem;
  position: relative;
  z-index: 1;
  min-height: 1.5rem;
  padding-left: 1.8rem;
  color-adjust: exact;
`;

export const Label = styled.label`
  display: inline-block;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.text.offWhite};
  position: relative;
  margin-bottom: 0;
  vertical-align: top;
  &::before {
    position: absolute;
    top: 0.1rem;
    left: -1.8rem;
    display: block;
    width: 1.3rem;
    height: 1.3rem;
    pointer-events: none;
    content: "";
    // background-color: #212121;
    border: 0.15rem solid ${({ theme }) => theme.text.secondary};
    border-radius: 50%;
  }
  &::after {
    position: absolute;
    top: 0.1rem;
    left: -1.8rem;
    display: block;
    width: 1.3rem;
    height: 1.3rem;
    content: "";
    background: 50%/50% 50% no-repeat;
    background-image: none;
  }
`;

export const Radio = styled.input`
  box-sizing: border-box;
  padding: 0;
  position: absolute;
  left: 0;
  z-index: -1;
  width: 1.3rem;
  height: 1.4rem;
  opacity: 0;
  &:checked ~ ${Label}::before {
    color: #fff;
    border-color: ${({ theme }) => theme.base.mainColor};
    background-color: ${({ theme }) => theme.base.mainColor};
  }
  &:checked ~ ${Label}::after {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
  }
`;
