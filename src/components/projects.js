import React from 'react';
import styled from 'styled-components';

// Container for the Projects Section
const ProjectsSection = styled.section`
 padding: 4rem 2rem;
 background: linear-gradient(135deg, #1e1e2f, #28293e);
 color: #333;
 text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 3rem;
  font-family: 'Poppins', sans-serif;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: left;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 1rem;
  font-family: 'Montserrat', sans-serif;
`;

const ProjectLogo = styled.img`
  width: 80px;  /* Increase the size of the logo */
  height: 80px; /* Make the logo a square */
  border-radius: 50%;  /* Make the logo circular */
  object-fit: cover;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 1.5rem;
`;

const ProjectLink = styled.a`
  font-size: 1.2rem;
  color: #f5a623;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;
   display: flex; /* Flex to align the text and logo */
  align-items: center; /* Vertically center the text and logo */

  &:hover {
    color: #ff7e00;
  }
      img {
    width: 60px; /* GitHub logo size */
    height: 60px; /* GitHub logo size */
    margin-left: 10px; /* Space between the text and the logo */
    margin-left: 15px; /* Shift the logo a little more to the right */
  }
`;


const Projects = () => {
  return (
    <ProjectsSection id="projects">
      <SectionTitle>My Projects</SectionTitle>
      <ProjectsGrid>
        {/* Example Project 1 */}
        <ProjectCard>
          <ProjectTitle>
          
        FirewallMonitor Pro


        
        </ProjectTitle>
          <ProjectDescription>
          Developed a Python-based SIEM tool to monitor and analyze Windows Defender Firewall logs. Automated anomaly detection, including blocked UDP protocols, reducing security risks by 25%. Integrated real-time updates and an alert-generation system, enhancing threat response efficiency by 40%. Utilized libraries like tkinter, os, and time for effective log tracking and system monitoring.</ProjectDescription>
          <ProjectLink href="https://github.com/hiyasharma/FirewallMonitor-Pro-SIEM-Tool-" target="_blank">
            View on GitHub  
            <ProjectLogo src={require('../assets/images/FireMon.png')} alt="Firewall Monitor Logo" /> 
          </ProjectLink>
        </ProjectCard>

        {/* Example Project 2 */}
        <ProjectCard>
          <ProjectTitle>InvisiScan</ProjectTitle>
          <ProjectDescription>
          Developed InvisiScan, a Python app for detecting and preventing file-less malware, as a finalist in the KAVACH National Hackathon 2023. Led a team to implement algorithms for network intrusion and kernel hijacking prevention. Enhanced security by 66.67%, using quarantine measures and sandboxing to protect legacy systems, including Windows XP. Collaborated with judges to enhance its efficiency and usability.
          </ProjectDescription>
          <ProjectLink href="https://github.com/hiyasharma/Malware-Analysis-Tool" target="_blank">
            View on GitHub
            <ProjectLogo src={require('../assets/images/InvisiScan.png')} alt="InvisiScan Logo" />
          </ProjectLink>
        </ProjectCard>

       {/* Example Project 3 */}
      <ProjectCard>
          <ProjectTitle>Bank Guard Pro</ProjectTitle>
          <ProjectDescription>
          Developed a secure Java-based banking platform handling over 10,000 transactions. Implemented multifactor authentication, reducing unauthorized access attempts by 50%. Addressed OWASP Top 10 vulnerabilities, ensuring a 99% secure platform. Integrated a honeypot feature, logging 100+ unauthorized access attempts. Strengthened data protection measures, improving overall threat detection by 30%.
          </ProjectDescription>
          <ProjectLink href="https://github.com/yourusername/project-one" target="_blank">
            View on GitHub
            <ProjectLogo src={require('../assets/images/BankGuard.png')} alt="BankGuard Logo" />
          </ProjectLink>
        </ProjectCard>


        {/* Example Project 4*/}
        <ProjectCard>
          <ProjectTitle>Scam Sniffer</ProjectTitle>
          <ProjectDescription>
          Developed a React.js-based SaaS platform for scam reporting with an intuitive UI. Integrated AI-powered verification using NLP and anomaly detection for report authentication. Automated one-click submissions to global scam agencies and Google Safe Browsing. Built a secure backend with Node.js/Django and MongoDB for encrypted storage and privacy compliance. Deployed on the cloud for scalability and availability.
          </ProjectDescription>
          <ProjectLink href="https://github.com/yourusername/project-one" target="_blank">
            View on GitHub
            <ProjectLogo src={require('../assets/images/SCAMSniffer.png')} alt="SCAM sniffer Logo" />
          </ProjectLink>
        </ProjectCard>

        {/* Add more projects as needed */}
      </ProjectsGrid>
    </ProjectsSection>
  );
};

export default Projects;
