import React from 'react';
import { projects } from '../../constants/constants';
import { FaGithubSquare } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';

const Projects = () => (
  <Section id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <div className="GridContainer">
      {projects.map((p, i) => {
        return (
          <div className="BlogCard" key={i}>
            <img className="Img" src={p.image} alt={p.title} />
            <div className="TitleContent">
              <h4 className="project-title">
                {p.title} </h4>
                <div className='pro-icon'>
                 <a className="ExternalLinks" href={p.visit}><FaExternalLinkAlt size={"1.5rem"}/></a>
                 <a className="ExternalLinks" href={p.source}><FaGithubSquare size="2rem"/></a>
                </div>
              
            </div>
            <p className="CardInfo">{p.description}</p>
            <div>
              {/* <p>Stack</p> */}
              <ul className="TagList">
                {p.tags.map((t, i) => {
                  return <li className="Tag" key={i}>{t}</li>;
                })}
              </ul>
            </div>
            
          </div>
        );
      })}
    </div>
  </Section>
);

export default Projects;