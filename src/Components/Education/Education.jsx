
import React from 'react';
import './Education.css';
import SchoolLogo from '../../assets/SchoolLogo.png'
import SITLogo from '../../assets/SITLogo.png'

const Education = () => {
  return (
    <div className="fullcontainer" id="education">
      <h2 className='header'>Education</h2>
      <h3 className='headers'>My education has been a journey of self-discovery and growth. My educational details are as follows.</h3>

      <div className="edu-timeline">

        <div className="edu-container edu-left-container">
          <img src={SITLogo} alt="Company Logo" className='image' />
          <div className="edu-text-box">
            <div className="div">
              <img src={SITLogo} alt="Company Logo" className='image1' />
              <div className="text-content">
                <h3 className='Education-header'>Sethu Institute of Technology,Pulloor, Kariapatti, Virudhunagar</h3>
                <div className="content">
                  <h4>Bachelor of Technology - B.Tech, Information Technology and Engineering</h4>
                  <small>Nov 2021 - Mar 2025</small>
                </div>
              </div>
            </div>
            <h3 className='grade'>Grade :7.96 CGPA</h3>
            <p className='overview'>I am currently pursuing a Bachelor's degree in Computer Science and Engineering at Sethu Institute of Technology. I have completed 4 semesters and have a CGPA of 7.96. My coursework includes Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks. </p>
            <span className="edu-left-container-arrow"></span>
          </div>
        </div>

        <div className="edu-container edu-right-container">
          <img src={SchoolLogo} alt="Company Logo" className='image' />
          <div className="edu-text-box">
            <div className="div">
              <img src={SchoolLogo} alt="Company Logo" className='image2' />
              <div className="text-content">
                <h3 className='Education-header'>St.John's Matric Hr. Sec. School, Kochadai,Madurai</h3>
                <div className="content">
                  <h4>MATRICULATION(XII), Science with Computer</h4>
                  <small>2019 - 2021</small>
                </div>
              </div>
            </div>
            <h3 className='grade'>Grade :80.54%</h3>
            <p className='overview'>I completed my class 12 high school education at St.John's Matric Hr. Sec. School, Kochadai, Madurai where I studied Science with Computer Science.</p>
            <span className="edu-right-container-arrow"></span>
          </div>
        </div>

        <div className="edu-container edu-left-container">
          <img src={SchoolLogo} alt="Company Logo" className='image' />
          <div className="edu-text-box">
            <div className="div">
              <img src={SchoolLogo} alt="Company Logo" className='image2' />
              <div className="text-content">
                <h3 className='Education-header'>St.John's Matric Hr. Sec. School, Kochadai,Madurai</h3>
                <div className="content">
                  <h4>MATRICULATION(X), Science with Computer</h4>
                  <small>2018 – 2019</small>
                </div>
              </div>
            </div>
            <h3 className='grade'>Grade :75.2%</h3>
            <p className='overview'>I completed my class 12 high school education at St.John's Matric Hr. Sec. School, Kochadai, Madurai where I studied Science with Computer Science.</p>
            <span className="edu-left-container-arrow"></span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Education;

