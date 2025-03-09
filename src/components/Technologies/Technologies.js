import React from 'react'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { RiReactjsLine, RiNextjsLine, RiHtml5Line, RiCss3Line } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiRedux } from "react-icons/si";

function Technologies () {

  return (
    <Section id="tech">
      <SectionDivider divider />
      <div className=' pb-4'>
        <SectionTitle>Technologies</SectionTitle>
        <SectionText>
          I've worked with a range a technologies in the web development world.
        </SectionText>
        <SectionText>
          Skills: <span style={{color:"#fff"}}>ReactJS, NextJS, JavaScript, TypeScript, HTML, CSS, NodeJS, JAVA, C++, C, Python, Liferay, PostgressSQL, Git, Github</span>
        </SectionText>
        <div className='d-flex flex-wrap align-items-center justify-content-center gap-4 mb-4'>
          <div className='tech-icon rounded border border-dark p-4'>
            <RiReactjsLine className='display-1 text-info'  />
          </div>
          <div className='tech-icon2 rounded border border-dark p-4'>
            <SiRedux className='display-1 ' style={{ color: '' }}  />
          </div>
          <div className='tech-icon rounded border border-dark p-4'>
            <RiHtml5Line className='display-1' style={{ color: 'red' }} />
          </div>
          <div className='tech-icon2 rounded border border-dark p-4'>
            <RiCss3Line className='display-1 ' style={{ color: 'darkorange' }}/>
          </div>
          <div className='tech-icon rounded border border-dark p-4'>
            <FaNodeJs className='display-1 ' style={{ color: 'lightgreen' }}/>
          </div>
        </div>
      </div>
      <SectionDivider colorAlt />
    </Section>
  );
}

export default Technologies
