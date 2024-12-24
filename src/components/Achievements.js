import React from 'react';
import styled, { keyframes } from 'styled-components'; // Added keyframes
import { FaTrophy } from 'react-icons/fa'; // Icon for awards

// Fade-in animation for Achievement Cards
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Container for the Achievements Section
const AchievementsSection = styled.section`
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #1e1e2f, #28293e);
  color: #fff;
  text-align: center;
`;

// Title for the Achievements Section
const AchievementsTitle = styled.h2`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 3rem;
  font-family: 'Poppins', sans-serif;
`;

// Container for the achievements items
const AchievementsList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  position: relative;
  flex-wrap: wrap; /* Ensures responsiveness */
`;

// Achievement Card (Circular)
const AchievementCard = styled.div`
  background-color: #000;
  padding: 2rem;
  border-radius: 10%;
  width: 280px;
  height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.8s ease-in-out;
`;

// Achievement Card Title
const AchievementCardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  color: #fff;
`;

// Achievement Card Description
const AchievementCardDescription = styled.p`
  font-size: 0.9rem;
  color: #D3D8DE;
  text-align: center;
  margin-bottom: 0.5rem;
`;

// Custom Logo for Achievement
const AchievementLogo = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 1rem;
  
`;

// Trophy Icon
const TrophyIcon = styled(FaTrophy)`
  font-size: 2.5rem;
  color: #ffd700; /* Gold color */
  margin-bottom: 1rem;
`;

// View Certificate Link
const CertificateLink = styled.a`
  font-size: 0.9rem;
  color: #4CAF50; /* Green for link */
  text-decoration: none;
  font-weight: bold;
  margin-top: 0.5rem;

  &:hover {
    text-decoration: underline;
  }
`;
const TitleBadge = styled.div`
  background-color: #ffd700; /* Gold background */
  color: #1e1e2f; /* Dark text */
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 3rem;
  display: inline-block;
  text-align: center;
  border: 2px solid black;
`;


// Logos Section
const LogosSection = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
`;

// Individual Logo Container
const LogoItem = styled.div`
  text-align: center;
  width: 120px; /* Adjust based on your needs */
`;

// Logo Image
const LogoImage = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 0.5rem;
`;

// Logo Name
const LogoName = styled.p`
  font-size: 1rem;
  color: #fff;
  margin-top: 0.5rem;
`;


const Achievements = () => {
  return (
    <AchievementsSection id="achievements">
      <AchievementsTitle>Achievements and Awards</AchievementsTitle>
      <AchievementsList>
        {/* Achievement Example 1 with Custom Logo */}
        <AchievementCard>
          <AchievementLogo src="/assets/images/CEA-logo.gif" alt="CEH Logo" />
          <AchievementCardTitle>Certified Ethical Hacker (CEH) v12</AchievementCardTitle>
          <AchievementCardDescription>
          Validated expertise in ethical hacking techniques and penetration testing to secure systems.
          </AchievementCardDescription>
          <CertificateLink href="https://drive.google.com/file/d/1nazgjLYq7IDI_8ZuMs9fJ8EwsXnryuKW/view?usp=sharing" target="_blank">
            View Certificate
          </CertificateLink>
        </AchievementCard>

        {/* Achievement Example 2 */}
        <AchievementCard>
          <TrophyIcon />
          <AchievementCardTitle>Kavach 2023 Hackathon</AchievementCardTitle>
          <AchievementCardDescription>
          Developed an innovative malware analysis tool, securing recognition in the grand finale at the national level.         </AchievementCardDescription>
          <CertificateLink href="https://drive.google.com/file/d/1ly5FzJgUtdih7wornC0Rz2brguRFSKwj/view?usp=sharing" target="_blank">
            View Certificate
          </CertificateLink>
        </AchievementCard>

        {/* Achievement Example 3 with Custom Logo */}
        <AchievementCard>
          <AchievementLogo src="/assets/images/nptel.jpeg" alt="nptel Logo" />
          <AchievementCardTitle>Blockchain and its Applications</AchievementCardTitle>
          <AchievementCardDescription>
          Certified in foundational blockchain technology and its real-world applications.          </AchievementCardDescription>
          <CertificateLink href="https://drive.google.com/file/d/1zM0zmjL5EYH2x8s7T9CuWUWJ-0-lSXs-/view?usp=sharing" target="_blank">
            View Certificate
          </CertificateLink>
        </AchievementCard>


       {/* Achievement Example 4 with Custom Logo */}
       <AchievementCard>
          <AchievementLogo src="/assets/images/hackerrank.webp" alt="hackerrank Logo" />
          <AchievementCardTitle>Java Basics - HackerRank Certificate</AchievementCardTitle>
          <AchievementCardDescription>
          Certifies skills in Java fundamentals, including syntax, data types, and control structures.          </AchievementCardDescription>
          <CertificateLink href="https://drive.google.com/file/d/1gcdSip6wHBK8-6sB37vZGgCN0yWleixc/view?usp=sharing" target="_blank">
            View Certificate
          </CertificateLink>
        </AchievementCard>

        {/* Achievement Example 5 with Custom Logo */}
       <AchievementCard>
          <AchievementLogo src="/assets/images/ec.png" alt="ec council Logo" />
          <AchievementCardTitle>Linux Command Line</AchievementCardTitle>
          <AchievementCardDescription>
          Certifies expertise in mastering Linux commands for effective system administration and automation tasks.         </AchievementCardDescription>
          <CertificateLink href="https://drive.google.com/file/d/1hcrvnh8Nh3xl40F7duhC1BUzkfMVZNY2/view?usp=sharing" target="_blank">
            View Certificate
          </CertificateLink>
        </AchievementCard>

        {/* Achievement Example 6 with Custom Logo */}
       <AchievementCard>
          <AchievementLogo src="/assets/images/michi.jpeg" alt="michigan Logo" />
          <AchievementCardTitle>Applied Machine Learning in Python</AchievementCardTitle>
          <AchievementCardDescription>
          Gained practical knowledge of machine learning techniques using Python for real-world problem-solving         </AchievementCardDescription>
          <CertificateLink href="https://drive.google.com/file/d/1uo_wcxuqD_pU9bNiaV6PzfZG1x8Krqq1/view?usp=sharing" target="_blank">
            View Certificate
          </CertificateLink>
        </AchievementCard>

        {/* Achievement Example 7 with Custom Logo */}
        <AchievementCard>
          <AchievementLogo src="/assets/images/smart.jpeg" alt="smart Logo" />
          <AchievementCardTitle>AI for CyberSecurity with IBM QRadar</AchievementCardTitle>
          <AchievementCardDescription>
          Gained hands-on experience in AI-driven threat detection using IBM QRadar during the SmartInternz externship.        </AchievementCardDescription>
          <CertificateLink href="https://drive.google.com/file/d/1Ivh5Sw9Zry4kCXqfbLfdNrApOHrkhsOQ/view?usp=sharing" target="_blank">
            View Certificate
          </CertificateLink>
        </AchievementCard>

        {/* Achievement Example 8 with Custom Logo */}
        <AchievementCard>
          <AchievementLogo src="/assets/images/cognitive.png" alt="cognitive Logo" />
          <AchievementCardTitle>Data Science Methodology</AchievementCardTitle>
          <AchievementCardDescription>
          Learned data science methodologies for real-world problem solving through IBM's Cognitive Class certificate.       </AchievementCardDescription>
          <CertificateLink href="https://drive.google.com/file/d/1CgSVMbfxKGURnCYWTtguOy7-nPOYkb6H/view?usp=sharing" target="_blank">
            View Certificate
          </CertificateLink>
        </AchievementCard>

        
      </AchievementsList>

      {/* Title Badge */}
      <TitleBadge>
        Badges
      </TitleBadge>

      {/* Logos Section */}
      <LogosSection>
        <LogoItem>
          <LogoImage src="/assets/images/leetcode.gif" alt="leetcode" />
          <LogoName>Leetcode</LogoName>
        </LogoItem>
        <LogoItem>
          <LogoImage src="/assets/images/archade.gif" alt="Archade" />
          <LogoName>Google Cloud</LogoName>
        </LogoItem>
        <LogoItem>
          <LogoImage src="/assets/images/CEH_badge.png" alt="EC Council" />
          <LogoName>CEHv12</LogoName>
        </LogoItem>
        <LogoItem>
          <LogoImage src="/assets/images/codechefsilver.svg" alt="CodeChef" />
          <LogoName>CodeChef</LogoName>
        </LogoItem>
        <LogoItem>
          <LogoImage src="/assets/images/python.png" alt="Hackerrank" />
          <LogoName>HackerRank</LogoName>
        </LogoItem>
      </LogosSection>
    </AchievementsSection>
  );
};

export default Achievements;



