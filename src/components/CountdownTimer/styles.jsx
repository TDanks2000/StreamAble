import { rgba } from "polished";
import styled from "styled-components";

export const ShowCounterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 1.25rem;
  padding: 0.75rem;
  text-decoration: none;
  border-top: 1px solid ${({ theme }) => rgba(theme.text.offWhite, 0.3)};
  opacity: 0.5;
`;

export const Countdown = styled.div`
  line-height: 1.25rem;
  padding: 0 0.5rem;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const CountdownValue = styled.p`
  display: inline-block;
`;

export const CountdownType = styled.span`
  display: flex;
  text-transform: uppercase;
  font-size: 0.65rem;
  margin-top: -5px;
  padding-left: 0.1rem;
`;
