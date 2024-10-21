import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import './Landing.css';
import profile_img from '../../assets/profile_img.jpg';

const Landing = () => {
  return (
    <div className="container" id="landing">
      <div className="left-content">
        <h1>
          Hi, I am <br />
          <span className="name">Harish M K</span>
        </h1>

        <p className="profession">
          I am a{' '}
          <span className="highlight">
            <Typewriter
              words={['Programmer', 'Frontend Developer', 'UI/UX Designer']}  
              loop={false}                                     
              cursor                                           
              cursorStyle="|"                                
              typeSpeed={100}                                  s
              deleteSpeed={50}                                 
              delaySpeed={1000}                                
            />
          </span>
        </p>

        <p className="description">
          I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning, I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.
        </p>

        <a href="https://drive.google.com/file/d/1UfNHbhLUDIIvOb8-Eb0rfj9aH-Fcprx_/view?usp=sharing" className="resume-btn">
          Check Resume
        </a>
      </div>

      <div className="right-content">
        <img src={profile_img} alt="Harish" className="profile-img" />
      </div>
    </div>
  );
};

export default Landing;
