// LoadingPage.js

import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom'; // For page redirection

const LoadingWrapper = styled.div`
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
  color: #f5a623;
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

const LoadingPage = () => {
  const history = useHistory();

  useEffect(() => {
    // After 3 seconds, navigate to the Hero page
    const timer = setTimeout(() => {
      history.push('/hero');
    }, 3000); // Adjust time for animation duration

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [history]);

  return (
    <LoadingWrapper>
      <LoadingAnimation />
      <Signature>Hiya Sharma</Signature>
    </LoadingWrapper>
  );
};

export default LoadingPage;
