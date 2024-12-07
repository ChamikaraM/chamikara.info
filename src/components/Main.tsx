import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import ProfilePic from '../assets/images/cm-profile.jpg';
import { TypeAnimation } from 'react-type-animation';

function Main() {

  return (
    <div className="container" id="main">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={ProfilePic} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/ChamikaraM" target="_blank" rel="noreferrer" hidden><GitHubIcon /></a>
            <a href="https://fi.linkedin.com/in/chamikara-mihiran" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          </div>
          <h1>Chamikara Mihiran</h1>          
          <div
            style={{ color: "white" }}>
            <TypeAnimation
              sequence={[
                'Software Engineer',
                1500,
                'Full Stack Developer',
                1500,
                'Cloud Enthusiast',
                1500
              ]}
              speed={50}
              style={{ fontSize: '2em' }}
              repeat={Infinity}
            />
          </div>
          

          <div className="mobile_social_icons">
            <a href="https://github.com/ChamikaraM" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://fi.linkedin.com/in/chamikara-mihiran" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;