import styled from "styled-components";

export const NextEpisodeWrapper = styled.div`
  position: relative;
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
`;

export const NextEpisodeContainer = styled.div`
  position: relative;
  background: ${({ theme }) => theme.base.navBg};
  color: ${({ theme }) => theme.text.primary};
  overflow: hidden;
`;

const NextEpisodeTDStyles = styled.div`
  width: 150px;
  font-weight: bold;
  font-size: 1.2rem;
  padding: 5px 10px;
  color: ${({ theme }) => theme.text.secondary};
`;

export const NextEpisodeTime = styled(NextEpisodeTDStyles)`
  float: left;
  text-align: left;
`;

export const NextEpisodeDate = styled(NextEpisodeTDStyles)`
  float: right;
  text-align: right;
  text-transform: uppercase;
`;

export const NextEpisodeNumber = styled.div`
  position: absolute;
  left: 20%;
  right: 20%;
  text-align: center;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  & p {
    text-transform: uppercase;
    font-weight: 500;
    & span {
      font-weight: bold;
      margin-left: 10px;
    }
  }
`;

export const CountdownWrapper = styled.div`
  background: ${({ theme }) => theme.base.navBg};
  color: ${({ theme }) => theme.text.primary};
  margin-bottom: 1.1rem;
  overflow: hidden;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;
