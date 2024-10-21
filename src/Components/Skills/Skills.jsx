// SkillCard.js
import React from 'react';
import './Skills.css';
import { FaReact, FaJsSquare} from 'react-icons/fa';
import {  SiVisualstudiocode, SiPostman, SiAdobexd } from 'react-icons/si';
import BootstrapLogo from '../../assets/BootstrapLogo.png'
import NextjsLogo from '../../assets/NextjsLogo.png'
import CssLogo from '../../assets/CssLogo.png'
import GitLogo from '../../assets/GitLogo.png'
import GithubLogo from '../../assets/GithubLogo.png'
import FigmaLogo from '../../assets/FigmaLogo.png'
import NetlifyLogo from '../../assets/NetlifyLogo.png'
import HtmlLogo from '../../assets/HtmlLogo.png'
import MaterialUILogo from '../../assets/MaterialUILogo.png'
import PhotoshopLogo from '../../assets/PhotoshopLogo.png'


const skills = {
    frontend: [
        { name: 'React Js', icon: <FaReact style={{ color: '#61DAFB', width: '24px', height: '24px', paddingTop: '4px' }} /> },  // React Icon Color
        { name: 'Next Js', icon: <img src={NextjsLogo} alt="NextjsLogo" style={{ width: '24px', height: '24px', paddingTop: '4px' }} /> },   // Next.js Icon Color
        { name: 'HTML', icon: <img src={HtmlLogo} aly=" HtmlLogo" style={{ width: '22px', height: '26px', paddingTop: '4px' }} /> },       // HTML Icon Color
        { name: 'CSS', icon: <img src={CssLogo} alt="Css Logo" style={{ width: '18px', height: '26px', paddingTop: '4px' }} /> },    // CSS Icon Color
        { name: 'JavaScript', icon: <FaJsSquare style={{ color: '#F7DF1E', width: '24px', height: '24px', paddingTop: '4px' }} /> }, // JavaScript Icon Color
        { name: 'Bootstrap', icon: <img src={BootstrapLogo} alt="Bootstrap Logo" style={{ width: '24px', height: '24px', paddingTop: '4px' }} /> },
        { name: 'Material UI', icon: <img src={MaterialUILogo} alt="MaterialUILogo " style={{ width: '24px', height: '24px', paddingTop: '4px' }} /> },

    ],
    others: [
        { name: 'Git', icon: <img src={GitLogo} style={{ width: '24px', height: '25px', paddingTop: '4px' }} /> },
        { name: 'GitHub', icon: <img src={GithubLogo} style={{ width: '24px', height: '25px', paddingTop: '4px' }} /> },
        { name: 'Netlify', icon: <img src={NetlifyLogo} style={{ width: '24px', height: '25px', paddingTop: '4px' }} /> },
        { name: 'VS Code', icon: <SiVisualstudiocode style={{ color: '#007ACC' }} /> },
        { name: 'Adobe XD', icon: <SiAdobexd style={{ color: '#FF61F6' }} /> },
        { name: 'Figma', icon: <img src={FigmaLogo} style={{ width: '18px', height: '26px', paddingTop: '4px' }} /> },
        { name: 'Photoshop', icon: <img src={PhotoshopLogo} style={{ width: '32px', height: '32px', paddingTop: '6px' }} /> },

    ]
};

const SkillCard = () => {
    return (
        <div className="skill-card-container" id="skills">
            <h2 className='topic'>Skills</h2>
            <h3 className='heading'>Here are the skills I've developed and mastered through my 3 years of experience</h3>
            <div className="skills-section">
                <div className="skills-category">
                    <h3 >Frontend</h3>
                    <div className="skills-list">
                        {skills.frontend.map((skill) => (
                            <div className="skill-item" key={skill.name}>
                                <span className="skill-icon">{skill.icon}</span>
                                <span className='skill-name'>{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="skills-category">
                    <h3>Others</h3>
                    <div className="skills-list">
                        {skills.others.map((skill) => (
                            <div className="skill-item" key={skill.name}>
                                <span className="skill-icon">{skill.icon}</span>
                                <span>{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillCard;
