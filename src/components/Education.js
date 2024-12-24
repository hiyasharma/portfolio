import React from 'react';


import styled, { keyframes } from 'styled-components'; // Added keyframes


import { FaArrowRight } from 'react-icons/fa';

// Fade-in animation for Education Cards
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

// Container for the Education Section
const EducationSection = styled.section`
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #1e1e2f, #28293e);
  color: #fff;
  text-align: center;
`;

// Title for the Education Section
const EducationTitle = styled.h2`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 3rem;
  font-family: 'Poppins', sans-serif;
`;

// Container for the education items
const EducationList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  position: relative;
`;

// Education Card (Circular)
const EducationCard = styled.div`
  background-color: #000;
  padding: 2rem;
  border-radius: 50%;
  width: 280px;
  height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.8s ease-in-out;
`;

// Education Card Title
const EducationCardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  color: #fff;
`;

// Education Card Description
const EducationCardDescription = styled.p`
  font-size: 0.8rem;
  color: #D3D8DE;
  text-align: center;
`;

// Education Logo (Circular)
const EducationLogo = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 1rem;
`;

// Arrow Connector
const Arrow = styled.div`
  position: absolute;
  color: #fff;
  font-size: 1.5rem;

  // Arrow positioning between cards
  &:nth-child(2) {
    left: 25%;
    transform: translateX(-50%);
  }

  &:nth-child(3) {
    left: 75%;
    transform: translateX(-50%);
  }
`;

const Education = () => {
  return (
    <EducationSection id="education">
      <EducationTitle>My Education</EducationTitle>
      <EducationList>
        
        {/* Education Example 4 */}
        <EducationCard>
          <EducationCardTitle>B.Tech CSE</EducationCardTitle>
          <EducationCardDescription>
            Vellore Institute of Technology, CGPA : 8.35  | 2021 - 2025
          </EducationCardDescription>
          <EducationLogo src="/assets/images/vit.png" alt="vit Logo" />

        </EducationCard>

         {/* Education Example 3 */}
         <EducationCard>
          <EducationCardTitle>Higher Secondary School</EducationCardTitle>
          <EducationCardDescription>
          International Public School, CGPA : 8.42 | 2019 - 2020

          </EducationCardDescription>
          <EducationLogo src="/assets/images/ips.jpeg" alt="ips Logo" />

        </EducationCard>
        
        {/* Education Example 2 */}
        <EducationCard>
          <EducationCardTitle>Secondary School</EducationCardTitle>
          <EducationCardDescription>
          International Public School, CGPA : 7.72 | 2018 - 2019
          </EducationCardDescription>
          <EducationLogo src="/assets/images/ips.jpeg" alt="ips Logo" />
        </EducationCard>
        
        {/* Education Example 1 */}
        <EducationCard>
          <EducationCardTitle>Primary School</EducationCardTitle>
          <EducationCardDescription>
          Billabong High International School | 2006 - 2011
          </EducationCardDescription>
          <EducationLogo src="/assets/images/billabong.png" alt="billabong Logo" />
        </EducationCard>
        

        

        {/* Add more education items as needed */}
      </EducationList>
    </EducationSection>
  );
};

export default Education;
