import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { IoHeartSharp } from "react-icons/io5";
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';
import { SiGmail } from 'react-icons/si';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:919405810025">+91 9405810025</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:saharshburse@gmail.com">
            saharshburse@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time with <IoHeartSharp style={{color:"red"}}/> Saharsh </Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/saharshburse">
                    <AiFillGithub size="3rem" />
                  </SocialIcons>
                  <SocialIcons href="https://www.linkedin.com/in/saharsh-burse">
                    <AiFillLinkedin size="3rem" />
                  </SocialIcons>
                  <SocialIcons href="mailto:saharshburse@gmail.com">
                    <SiGmail size="3rem"/>
                  </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
