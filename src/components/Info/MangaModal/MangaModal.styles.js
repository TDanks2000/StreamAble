import styled from "styled-components";

export const ModalContainer = styled.div`
  position: absolute;
  top: -78px;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

export const ModalInner = styled.div`
  border-radius: 8px;
  overflow: hidden;
  width: 50%;
  border-radius: 8px;
  text-align: center;
  background: ${({ theme }) => theme.base.mainColor};
  padding: 10px;
`;
