import React, { useState, useEffect } from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, TxtRotateWrap } from './HeroStyles';
import { Div3, SocialIcons } from '../Header/HeaderStyles';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { SiGmail } from "react-icons/si";
const Hero = (props) => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Software Developer" ];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text, isDeleting]) // Added isDeleting to the dependency array

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }
return(
  <div className='' >
    <Section row nopadding  >
      <LeftSection>
       <h1 style={{marginTop:"15%"}}>
       {`Hello, It's Me`}
       </h1>
       <h1 className='main-heading'>
       {`Saharsh Burse`}
       </h1>
        <h1 className="">
        
           <TxtRotateWrap  dataPeriod="1000" data-rotate='[ "Web Developer", "Software Developer" ]'><span className="wrap" dangerouslySetInnerHTML={{ __html: text }}></span></TxtRotateWrap></h1>
        <div className="learn-more-btn">
        <Button  onClick={()=>{}}>
        <a href="/resume.pdf" style={{color:"white"}} download>Download CV</a>
          </Button>
        </div>
        <Div3>
        <SocialIcons href="https://github.com/saharshburse">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/saharsh-burse">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="mailto:saharshburse@gmail.com">
          <SiGmail size="3rem"/>
        </SocialIcons>
      </Div3>
      </LeftSection>
    </Section>
  </div>
  )
};

export default Hero;

