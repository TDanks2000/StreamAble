import styled from "styled-components";

export const FooterContainer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  //   height: 5rem;
  color: ${({ theme }) => theme.text.primary};
  background: ${({ theme }) => theme.base.navBg};
`;

export const FooterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem 1.5rem;
  margin: 0 auto;
  max-width: 1800px;
`;

export const FooterLogo = styled.div`
  width: 150px;
  margin-bottom: 1rem;
  margin-left: -10px;
  & img {
    width: 100%;
    height: 100%;
  }
`;

export const FooterCopyright = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.text.secondary};
  font-size: 0.8rem;
`;

export const FooterDisclaimer = styled.div`
  font-size: 0.8rem;
  width: 100%;
  margin-top: 0.4rem;
  color: ${({ theme }) => theme.text.secondary};
`;
