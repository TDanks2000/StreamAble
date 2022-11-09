import styled from "styled-components";

export const Container = styled.div`
  margin-top: 0.25rem;
  font-size: 0.8rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  margin-top: -0.15rem;
  margin-bottom: 0.3rem;
  color: ${({ theme }) => theme.text.offWhite};
  @media (min-width: 1600px) {
    font-size: 1rem;
  }
`;

export const Dot = styled.span`
  text-transform: uppercase;
  & + ::before {
    content: "";
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: ${({ theme }) => theme.text.secondary};
    vertical-align: middle;
    display: inline-block;
    margin: 0 8px;
  }
`;
