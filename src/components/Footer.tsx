import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/ChamikaraM" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://fi.linkedin.com/in/chamikara-mihiran" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>A portfolio designed & built by <a href="https://github.com/ChamikaraM" target="_blank" rel="noreferrer">Chamikara Mihiran</a></p>
    </footer>
  );
}

export default Footer;