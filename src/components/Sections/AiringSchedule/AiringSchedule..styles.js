import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 0.25rem;
  // background: ${({ theme }) => theme.base.navBg};
`;

export const ItemsContainer = styled.div`
  display: inline-block;
`;

export const DayTitle = styled.div`
  display: inline-block;
  width: 100%;
  text-transform: uppercase;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.12rem;
  margin-top: 0.5rem;
  gap: 1.5rem;
  padding: 5px;
  // flex-direction: column;
  // flex-wrap: wrap;
  // justify-content: space-between;
  // align-items: flex-start;
`;
