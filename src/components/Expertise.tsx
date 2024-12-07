import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSoundcloud, faGitAlt, faAngular } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    ".NET", "Angular", "React", "TypeScript", "JavaScript", "HTML5", "CSS3", "SASS", "MSSQL", "Entity Framework"
];

const labelsSecond = [
    "Azure App Services", "Azure Functions/Logic Apps", "KeyVault", "Blob Storage", "Queue Storage", "Application insights", "Active Directory", "B2C Authentication"
];

const labelsThird = [
    "Git", "AZDO", "CI/CD", "GitLab", "Docker", "JFrog", "Bitbucket", "playwright", "SonarCloud", "WhiteSource", "Veracode"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faAngular} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>I have extensive experience developing end-to-end web solutions using modern frameworks like Angular and .NET Core. Proficient in frontend technologies such as HTML, CSS, JavaScript, and TypeScript, alongside backend expertise in C# and RESTful APIs, I contribute to delivering user-friendly, scalable applications. I am actively involved in the entire SDLC, from planning and design to development, testing, and maintenance.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip colored-text' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faSoundcloud} size="3x"/>
                    <h3>Azure Cloud Developer</h3>
                    <p>I specialize in building secure and scalable cloud-based applications leveraging the capabilities of Microsoft Azure. My expertise includes designing and integrating cloud services to optimize application performance, security, and reliability. I am experienced in developing solutions that meet business needs while adhering to best practices in cloud architecture and service management.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faGitAlt} size="3x"/>
                    <h3>DevOps & Automation</h3>
                    <p>I am skilled in implementing and maintaining CI/CD pipelines to automate build, test, and deployment processes, primarily using Azure DevOps and GitLab. My experience includes enhancing software delivery workflows through automation, ensuring code quality with static analysis tools, and optimizing deployment strategies. With a focus on collaboration and efficiency, I incorporate Agile methodologies to drive continuous integration and delivery, ensuring timely and reliable product releases.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>                
            </div>
        </div>
    </div>
    );
}

export default Expertise;
