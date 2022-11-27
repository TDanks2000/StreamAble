import styled from "styled-components";

import { AiFillAndroid } from "react-icons/ai";

export const Container = styled.div`
  width: 100%;
  height: 300px;
  padding-top: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Text = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.text.primary};
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
`;

export const SubText = styled.h3`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.text.offWhite};
  width: 100%;
  text-align: center;
  margin-bottom: 1rem;
`;

export const DownloadContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 1rem;
`;

export const DownloadAndroid = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.base.mainColor};
  padding: 10px 25px;
  border-radius: 10px;
  gap: 15px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.5rem;
`;

export const DownloadText = styled.p``;

export const DownloadIcon = styled(AiFillAndroid)``;

export const ReportBugs = styled.div`
  margin-top: 20px;
  & a {
    color: ${({ theme }) => theme.base.mainColor};
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
`;
