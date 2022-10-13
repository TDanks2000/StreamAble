import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.base.darkBg};
  margin-bottom: 1rem;
  border-radius: 8px;
  overflow: hidden;
`;

export const TypeContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 2rem;
`;

export const DubContainer = styled(TypeContainer)``;
export const SubContainer = styled(TypeContainer)``;

export const TypeTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 1em;
  text-transform: uppercase;
  font-weight: bold;
  color: ${({ theme }) => theme.base.mainColor};
  & span {
    color: ${({ theme }) => theme.text.primary};
    font-size: 1.2rem;
    margin-left: 1rem;
  }
`;

export const TypeWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  gap: 1rem;
  margin-left: 2rem;
`;

export const Separator = styled.div`
  width: 100%;
  margin-top: 10px;
  padding-bottom: 5px;
  border-top: 1px dotted ${({ theme }) => theme.text.secondary};
`;
