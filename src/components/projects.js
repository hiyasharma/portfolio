import React from 'react';
import styled from 'styled-components';

// Container for the Projects Section
const ProjectsSection = styled.section`
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #1e1e2f, #28293e);
  color: #333;
  text-align: center;
  position: relative; /* for the title shadow animation */
  animation: sectionTitleShadow 1.5s ease-in-out infinite alternate;
`;

const SectionTitle = styled.h2`
  font-size: 3.5rem;
  color: #fff;
  margin-bottom: 3rem;
  font-family: 'Dancing Script', cursive;
  animation: titleShadow 1.5s ease-in-out infinite alternate;

  @keyframes titleShadow {
    0% {
      text-shadow: 0 0 8px rgba(255, 105, 180, 1), 0 0 15px rgba(255, 105, 180, 1);
    }
    100% {
      text-shadow: 0 0 12px rgba(255, 165, 0, 1), 0 0 25px rgba(255, 165, 0, 1);
    }
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled.div`
  background-color: rgb(254, 246, 215);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 6px 10px rgba(232, 239, 98, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: left;
  position: relative;
  animation: cardShadow 1.5s ease-in-out infinite alternate;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 25px rgba(239, 100, 100, 0.2);
  }

  @keyframes cardShadow {
    0% {
      box-shadow: 0 4px 8px rgba(194, 33, 33, 0.1);
    }
    100% {
      box-shadow: 0 12px 24px rgba(188, 30, 30, 0.3);
    }
  }
`;

const ProjectTitle = styled.h3`
  font-size: 2.2rem;
  margin-bottom: 1rem;
  font-family: 'Dancing Script', cursive;
  color: #ff6f61;
  transition: color 0.3s ease;

  &:hover {
    color: #ff3d29; /* Color change on hover */
  }
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
            Developed a Python-based SIEM tool to monitor and analyze Windows Defender Firewall logs. Automated anomaly detection, including blocked UDP protocols, reducing security risks by 25%. Integrated real-time updates and an alert-generation system, enhancing threat response efficiency by 40%. Utilized libraries like tkinter, os, and time for effective log tracking and system monitoring.
          </ProjectDescription>
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

        {/* Example Project 4 */}
        <ProjectCard>
          <ProjectTitle>Scam Sniffer</ProjectTitle>
          <ProjectDescription>
            Developed a React.js-based SaaS platform for scam reporting with an intuitive UI. Integrated AI-powered verification using NLP and anomaly detection for report authentication. Automated one-click submissions to global scam agencies and Google Safe Browsing. Built a secure backend with Node.js/Django and MongoDB for encrypted storage and privacy compliance. Deployed on the cloud for scalability and availability.
          </ProjectDescription>
          <ProjectLink href="https://github.com/yourusername/project-one" target="_blank">
            View on GitHub
            <ProjectLogo src={require('../assets/images/SCAMSniffer.png')} alt="SCAM Sniffer Logo" />
          </ProjectLink>
        </ProjectCard>
      </ProjectsGrid>
    </ProjectsSection>
  );
};

export default Projects;