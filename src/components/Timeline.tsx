import '@fortawesome/free-regular-svg-icons'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'
import IFS from '../assets/icons/IFS.jpg';
import Virtusa from '../assets/icons/virtusa.jpg';
import UoM from '../assets/icons/uom.jpg';
import Unicorn from '../assets/icons/unicorn.jpg';
import Crowd from '../assets/icons/crowd.jpg';

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2021 Nov - 2024 Aug"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<img src={IFS} alt="Timeline Icon" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />}
          >
            <h3 className="vertical-timeline-element-title"> Senior Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">IFS R&D International (Pvt.) Ltd</h4>
            <p>In my role as Senior Software Engineer at IFS R&D International, I contributed to the full software development lifecycle, collaborating with teams to deliver features that enhanced product usability and user experience. I specialized in full-stack development using .NET and C#, and developed dynamic front-end solutions with Angular, HTML, CSS, JavaScript, and TypeScript. I also gained hands-on experience with Microsoft Azure Cloud Services, including App Services and Key Vault, and played a key role in streamlining our CI/CD pipeline in Azure DevOps. Additionally, I investigated complex issues, created technical documentation, and advocated for Agile methodologies across the team.</p>
            <p className="skills"><b>Skills:</b> C# · .NET Core · Angular · Microsoft Azure · Azure DevOps Services · Unit Testing · Azure Active Directory · Continuous Integration and Continuous Delivery (CI/CD) · Gitlab · TypeScript · JavaScript · HTML5 · SCSS · CSS · Microsoft Visual Studio Code · Visual Studio Code · Git · Bitbucket · JFrog · docker · Application Insights · Playwright · Jira · Confluence · Agile · Scrum</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2019 Dec - 2021 Oct"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<img src={Virtusa} alt="Timeline Icon" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer / Senior Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Virtusa (Pvt.) Ltd</h4>
            <p>As a Software Engineer at Virtusa (Pvt) Ltd, I designed and implemented scalable web applications using ASP.NET, Web API, Entity Framework, and Angular, ensuring optimal performance and scalability. I specialized in Microsoft Azure services, including App Services, Function Apps, Key Vault, Azure Queues, and B2C authentication, which enabled seamless user management and secure data access. I also developed robust back-end services and integrated SQL Server databases to support complex application requirements. Throughout the development process, I conducted extensive testing of newly implemented features to ensure quality and alignment with business requirements. I consistently adhered to coding best practices, focusing on code quality, security, and maintainability to meet enterprise standards.</p>
            <p className="skills"><b>Skills:</b> C# · .NET · .NET Core · Angular · TypeScript · JavaScript · MSSQL · Microsoft SQL Server · HTML5 · SCSS · CSS · Entity Framework (EF) Core · Microsoft Azure · Azure Active Directory · Azure Functions · Azure App Services · Azure Key Vault · B2C Authentication · Azure CLI · ARM templates · Azure DevOps · Git · SendGrid</p>
          </VerticalTimelineElement>          
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2018 Aug - 2019 Feb"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<img src={Unicorn} alt="Timeline Icon" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineering Trainee</h3>
            <h4 className="vertical-timeline-element-subtitle">Unicorn Solutions (Pvt.) Ltd</h4>
            <p>As a Trainee Software Engineer at Unicorn Solutions (Pvt) Ltd, I developed interactive web applications using .NET and Angular, delivering user-friendly solutions tailored to business needs. One of my key contributions was designing and implementing a Quartz.NET-based job scheduling and monitoring application, which streamlined automated task execution. Additionally, I worked extensively with relational databases such as MS SQL Server, building efficient queries and ensuring data integrity. Throughout my tenure, I gained hands-on experience with a variety of technologies, including C#, .NET/.NET Core, Angular, Quartz.NET, and MSSQL, contributing to the successful development of business-critical applications.</p>
            <p className="skills"><b>Skills:</b> C# · .NET Core · .NET Framework · Angular · MSSQL · Entity Framework · Azure DevOps · Azure Functions · Quartz.NET · HTML5 · SCSS · CSS · TypeScript · JavaScript</p>
          </VerticalTimelineElement>          
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2017 Jun - 2018 Jan"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<img src={Crowd} alt="Timeline Icon" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />}
          >
            <h3 className="vertical-timeline-element-title">Undergraduate Trainee</h3>
            <h4 className="vertical-timeline-element-subtitle">Crowderia AB</h4>
            <p>As an undergraduate trainee at Crowderia, I contributed to building an inventory core management system with both a cloud-based web application and a mobile application. The web app was developed using Angular and Node.js, with MongoDB as the database, while the mobile app was built using the Ionic 3 framework.</p>
            <p className="skills"><b>Skills:</b> Angular · Ionic Framework · MongoDB · Node.js · HTML5 · SCSS · CSS · Angular Material · Heroku · Git · GitHub</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2016 Jan - 2020 Mar"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<img src={UoM} alt="Timeline Icon" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />}
          >
            <h3 className="vertical-timeline-element-title">University of Moratuwa</h3>
            <h4 className="vertical-timeline-element-subtitle">B.Sc. (Hons.) in Information Technology, Faculty of Information Technology</h4>
            <p>I completed my Bachelor of Science (Honours) degree in Information Technology at the Faculty of Information Technology, University of Moratuwa. This 4-year program provided me with a strong foundation in core IT concepts and advanced topics. My studies encompassed a diverse range of subjects, including Data Structures and Algorithms, Data Mining & Warehousing, Digital Image Processing, Cluster Computing, Big Data Analytics, and Database Management Systems.</p>            
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;