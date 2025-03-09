import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    // return node.scrollTo({ left, behavior: 'smooth' });
    return null;
  }

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));
      
      scroll(carouselRef.current, scrollLeft);
    }
  }

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);

      setActiveItem(index);
    }
  }

  // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    }

    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <div className='d-flex align-items-center justify-content-between gap-4'>
       <div className='m-0 section-text' style={{width:"75%"}}>
         
          As a passionate and enthusiastic Software Engineer, I possess a keen interest in software development, driven by comprehensive exposure to underlying concepts and a commitment to delivering high-quality code. 
         <br/> With a strong foundation in various programming languages, I excel in designing and developing innovative solutions.
          <br/>My dedication to collaboration and effective teamwork ensures seamless integration within cross-functional teams, contributing to the successful delivery of impactful projects.
       
        </div>
        <div className='w-25'>
          <img className='' src="/images/myPic.jpg" alt="My Pic" width={"100%"} height={"100%"} style={{ borderRadius: '10px' }} />
        </div>
      </div>
      <SectionDivider />
    </Section>
  );
};

export default Timeline;
