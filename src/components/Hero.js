import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';  // Import the Navbar component

// Styled Components for Animation
const AnimationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #28293e;
  flex-direction: column;
`;

const LoadingAnimation = styled.div`
  border: 8px solid #f3f3f3; /* Light gray background */
  border-top: 8px solid #3498db; /* Blue color for the spinning effect */
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const Signature = styled.h2`
  margin-top: 20px;
  font-family: 'Dancing Script', cursive;
  font-size: 3rem;
  color: #f5a623; /* Signature color */
  text-align: center;
  animation: fadeIn 2s ease-in-out 1s forwards;
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const HeroSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: linear-gradient(135deg, #1e1e2f, #28293e);
  color: white;
  height: 100vh;
  opacity: ${({ isLoaded }) => (isLoaded ? 1 : 0)};
  transition: opacity 1s ease-in-out;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  width: 100%;
`;

const TextContent = styled.div`
  flex: 1;
  padding-left: 2rem;
  text-align: left;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #fff;
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #ccc;
  max-width: 800px;
  margin-bottom: 2rem;
`;

const ImageContainer = styled.div`
  flex: 1;
  text-align: center;
`;

const Image = styled.img`
  width: 200px;  /* Adjusted width */
  height: 200px; /* Adjusted height */
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #000;
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1rem;
`;

const Link = styled.a`
  color: #fff;
  font-size: 1rem;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #f5a623;
  }

  img {
    width: 40px; /* Adjust size of the icons */
    height: 40px;
    border-radius: 50%; /* Makes the logos circular */
    object-fit: cover;
    transition: transform 0.3s;
  }

  &:hover img {
    transform: scale(1.1); /* Slight zoom effect on hover */
  }
`;

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true); // Set to true after 3 seconds (adjust as needed)
    }, 3000); // Adjust time for the animation duration

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <>
      {!isLoaded ? (
        <AnimationWrapper>
          <LoadingAnimation />
          <Signature>Hiya Sharma</Signature> {/* Display signature during loading */}
        </AnimationWrapper>
      ) : (
        <>
          <Navbar /> {/* Display Navbar at the same time after animation */}
          <HeroSection isLoaded={isLoaded}>
            <ContentWrapper>
              <ImageContainer>
                <Image src={require('../assets/images/hiya-sharma.png')} alt="Hiya Sharma" />
                <LinksContainer>
                  <Link href="https://www.linkedin.com/in/hiyasdrive/" target="_blank">
                    <img src={require('../assets/images/linkedin-logo.png')} alt="LinkedIn" />
                  </Link>
                  <Link href="https://github.com/hiyasharma" target="_blank">
                    <img src={require('../assets/images/github-logo.png')} alt="GitHub" />
                  </Link>
                  <Link href="https://leetcode.com/u/hiyasdrive/" target="_blank">
                    <img src={require('../assets/images/leetcode-logo.png')} alt="LeetCode" />
                  </Link>
                  <Link href="https://medium.com/@hiyasdrive" target="_blank">
                    <img src={require('../assets/images/medium-logo.png')} alt="Medium" />
                  </Link>
                </LinksContainer>
              </ImageContainer>
              <TextContent>
                <Title>About Me</Title>
                <Description>
                Hi! I'm Hiya Sharma, a passionate and driven individual with a keen interest in Full-Stack development and Cyber Security. My journey in the world of technology has been fueled by a curiosity to understand how things work, combined with a commitment to developing innovative and secure solutions. As a self-driven programmer, I’ve had the opportunity to dive into a variety of domains including software development, ethical hacking, cloud computing and problem solving. I am always eager to learn new skills and tackle challenges that push me to think critically and creatively. With a strong foundation in Python, Java, and C++, I’ve developed several personal and team projects that showcase my abilities to design and implement efficient solutions. My work in cybersecurity reflects my passion for safeguarding digital spaces, and I actively work on projects that involve malware detection, threat intelligence, and SIEM tools. I’m always striving to grow both professionally and personally, and I’m excited to contribute to the ever-evolving world of technology.

                </Description>
              </TextContent>
            </ContentWrapper>
          </HeroSection>
        </>
      )}
    </>
  );
};

export default Hero;