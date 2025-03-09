import React from 'react'
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents'

function Experience() {
    return (
        <Section id="experience">
            <SectionTitle>Experience</SectionTitle>
            <div className='experience-container'>
                <SectionText>
                    <strong>HashedIn By Deloitte</strong> <br />
                    Software Developer Engineer- I <br />
                    Pune, Maharashtra <br />
                    August 2022 - Present
                </SectionText>
                <SectionText className='experience-details'>
                    <div className='experience-list'>
                        <li><span className='ul-line'></span>React.js with Liferay Projects</li>
                        <ul className='experience-sublist'>
                            <li><span className='subul-line'></span>Designed and maintained UI components in React.js and TypeScript, enhancing functionality and reducing bugs.</li>
                            <li><span className='subul-line'></span>Constructed reusable components/modules to handle various API responses and CRUD operations, accelerating development.</li>
                            <li><span className='subul-line'></span>Developed static pages and fragments using HTML, CSS, and JavaScript, and created Liferay modules integrated into pages using JSP and Java, improving deployment efficiency and overall performance.</li>
                        </ul>
                        <li><span className='ul-line'></span>Next.js with TypeScript Project</li>
                        <ul className='experience-sublist'>
                            <li><span className='subul-line'></span>Spearheaded the modernization of older applications, taking full ownership of multiple applications for end-to-end development.</li>
                            <li><span className='subul-line'></span>Conducted POCs, analyzed old applications, and engaged in client discussions, knowledge transfer sessions, and demos.</li>
                            <li><span className='subul-line'></span>Implemented complex logic, form validations, and data visualizations using Plotly, enhancing data accuracy.</li>
                        </ul>
                        <li><span className='ul-line'></span>General Achievements:</li>
                        <ul className='experience-sublist'>
                            <li><span className='subul-line'></span>Collaborated with cross-functional teams to deliver high-quality software solutions in agile environments.</li>
                            <li><span className='subul-line'></span>Optimized front-end performance, reducing load times and increasing responsiveness.</li>
                            <li><span className='subul-line'></span>Enforced best practices in code quality, testing, and documentation, honored with two Excellence Awards.</li>
                        </ul>
                    </div>
                </SectionText>
            </div>
        </Section>
    )
}

export default Experience
