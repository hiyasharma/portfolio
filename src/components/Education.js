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

// Bounce animation for the section title
const bounceIn = keyframes`
  0% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(-10px);
  }
  50% {
    transform: translateY(0);
  }
  75% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0);
  }
`;

// Hover scale animation for Education Cards
const scaleOnHover = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.05);
  }
`;

// Container for the Education Section
const EducationSection = styled.section`
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #1e1e2f, #28293e);
  color: #333;
  text-align: center;
  position: relative; /* for the title shadow animation */
  animation: sectionTitleShadow 1.5s ease-in-out infinite alternate;

   @media (max-width: 768px) { /* Adjust padding for mobile view */
    padding: 2rem 1rem;
  }
`;

// Title for the Education Section with animation and style improvements
const EducationTitle = styled.h2`
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
 
  @media (max-width: 768px) { /* Reduce font size for smaller screens */
    font-size: 2.5rem;
  }
 
`;

// Container for the education items
const EducationList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  position: relative;

   @media (max-width: 768px) { /* Stack items vertically for mobile view */
    flex-direction: column;
    gap: 2rem;
  }
`;

// Education Card (Circular) with Hover Animation
const EducationCard = styled.div`
  background-color: #000;
  padding: 2rem;
  border-radius: 50%;
  width: 270px;
  height: 270px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  box-shadow: 0 8px 15px rgba(147, 151, 32, 0.2);
  //animation: ${fadeIn} 0.8s ease-in-out;
  
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    animation: ${scaleOnHover} 0.3s forwards;
    box-shadow: 0 15px 20px rgba(166, 227, 10, 0.4); // Shadow grows on hover
    border-color: #ff4500; // Change border color on hover
  }

  @media (max-width: 768px) { /* Adjust size for smaller screens */
    width: 200px;
    height: 200px;
  }
`;

// Education Card Title
const EducationCardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  color: #fff;

  @media (max-width: 768px) { /* Reduce font size for smaller screens */
    font-size: 1.2rem;
  }
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

   @media (max-width: 768px) { /* Reduce logo size for smaller screens */
    width: 60px;
    height: 60px;
  }
`;

// Arrow Connector with Animation for movement
const Arrow = styled.div`
  position: absolute;
  color: #fff;
  font-size: 1.5rem;
  transition: transform 0.3s ease;

  // Arrow positioning between cards
  &:nth-child(2) {
    left: 25%;
    transform: translateX(-50%);
  }

  &:nth-child(3) {
    left: 75%;
    transform: translateX(-50%);
  }

  &:hover {
    transform: translateY(-10px);
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
          <EducationLogo src={require('../assets/images/vit.png')} alt="vit Logo" />
        </EducationCard>

        {/* Education Example 3 */}
        <EducationCard>
          <EducationCardTitle>Higher Secondary School</EducationCardTitle>
          <EducationCardDescription>
            International Public School, CGPA : 8.42 | 2019 - 2020
          </EducationCardDescription>
          <EducationLogo src={require('../assets/images/ips.jpeg')} alt="ips Logo" />
        </EducationCard>
        
        {/* Education Example 2 */}
        <EducationCard>
          <EducationCardTitle>Secondary School</EducationCardTitle>
          <EducationCardDescription>
            International Public School, CGPA : 7.72 | 2018 - 2019
          </EducationCardDescription>
          <EducationLogo src={require('../assets/images/ips.jpeg')} alt="ips Logo" />
        </EducationCard>
        
        {/* Education Example 1 */}
        <EducationCard>
          <EducationCardTitle>Primary School</EducationCardTitle>
          <EducationCardDescription>
            Billabong High International School | 2006 - 2011
          </EducationCardDescription>
          <EducationLogo src={require('../assets/images/billabong.png')} alt="billabong Logo" />
        </EducationCard>

        {/* Add more education items as needed */}
      </EducationList>
    </EducationSection>
  );
};

export default Education;