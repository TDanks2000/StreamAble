import React from "react";
import {
  FooterContainer,
  FooterWrapper,
  FooterLogo,
  FooterDisclaimer,
  FooterCopyright,
} from "./Footer.styles";

import LOGO from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLogo>
          <img src={LOGO} alt={"footer-logo"} />
        </FooterLogo>
        <FooterCopyright>
          Copyright © StreamAble. All Rights Reserved
        </FooterCopyright>
        <FooterDisclaimer>
          This site does not store any files on its server. <br />
          All contents are provided by non-affiliated third parties.
        </FooterDisclaimer>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
