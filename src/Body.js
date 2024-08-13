import React, { useRef } from 'react';
import './Body.css';
import images from './images/back.webp';
import Search from './Search';

import Course from './Course';
import Contact from './Contact';
import css from './images/csslogo.png';
import html from './images/htmllogo.png';
import js from './images/jslogo.png';

const Body = () => {
  const courseRef = useRef(null);

  const scrollToCourse = () => {
    if (courseRef.current) {
      courseRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id='home'>
      <div>
        <img src={images} alt="background" />
        <div className='welcome'>
          <h1>Welcome to CodeMaster!</h1>
          <h3>"Welcome to CodeMaster: Your journey to coding mastery starts here!"</h3>
        </div>
        <div className='button'>
          <button className='content' onClick={scrollToCourse}>VIEW COURSES</button>
        </div>
        <div className="logo">
          <img src={css} alt="css" className='css' />
          <img src={html} alt="html" className='html' />
          <img src={js} alt="html" className='js' />
        </div>
        <div ref={courseRef}>
          <Course 
           
          />
        </div>
        <Contact />
        
      </div>
    </section>
  );
};

export default Body;
