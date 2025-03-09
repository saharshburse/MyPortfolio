import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white",width:"100%" }}>
          {/* <DiCssdeck size="3rem" /> <span> Portfolio</span> */}
            <img src="/images/logo.png" alt="logo" style={{ width: '100%', height: '5rem' }} />
           
        </a>
      </Link>
    </Div1>
    <Div2>
    <li>
        <Link href="#experience">
          <NavLink>Experience</NavLink>
        </Link>
      </li>  
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>   
      <li>
        <Link href="#edu">
          <NavLink>Education</NavLink>
        </Link>
      </li>       
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>        
    </Div2>
    
    </Container>
);

export default Header;
