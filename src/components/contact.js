import React, { useState } from 'react';
import styled from 'styled-components';

// Container for the entire section
const ContactSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 1rem;
  background: linear-gradient(135deg, #1e1e2f, #28293e);
  color: white;
  min-height: 100vh;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column; /* Adjust layout for smaller screens */
    padding: 2rem 1rem;
  }
`;

// Wrapper for content and form
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 500px;
  width: 100%;
  z-index: 2;
  margin-left: -10%;

  @media (max-width: 768px) {
    margin-left: 0; /* Center align content for mobile */
  }
`;

// Title styling
const Title = styled.h1`
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

  @media (max-width: 768px) {
    font-size: 2.5rem; /* Reduce font size for smaller screens */
  }
`;

// Form container
const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: rgb(254, 246, 215);
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 9px 15px rgba(235, 16, 187, 0.1);

  @media (max-width: 768px) {
    padding: 1rem; /* Adjust padding for smaller screens */
  }
`;

// Form group container for each field
const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

// Label for input fields
const Label = styled.label`
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  color: #333;
  font-weight: bold;
`;

// Input field styles
const Input = styled.input`
  padding: 0.8rem;
  font-size: 0.9rem;
  width: 90%;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: rgb(159, 190, 211);

  &:focus {
    outline: none;
    border-color: #3498db;
  }

 
`;

// Textarea field for message
const Textarea = styled.textarea`
  padding: 0.8rem;
  font-size: 0.9rem;
  width: 90%;
  height: 120px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: rgb(159, 190, 211);
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #3498db;
  }
  
`;

// Submit button
const SubmitButton = styled.button`
  background-color: #3498db;
  color: white;
  border: none;
  padding: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2980b9;
  }
`;

// Response message (after form submission)
const ResponseMessage = styled.div`
  margin-top: 1rem;
  font-size: 1rem;
  color: ${(props) => (props.success ? 'green' : 'red')};
`;

// Styled image for the right corner
const ProfileImage = styled.img`
  position: absolute;
  top: 25%;
  right: 10%;
  width: 220px;
  height: 220px;
  border-radius: 5%;
  border: 3px solid #fff;
  object-fit: cover;
  z-index: 1;

   @media (max-width: 768px) {
    position: static; /* Remove absolute positioning for smaller screens */
    margin-bottom: 1rem; /* Add spacing below image */
  }
`;

// Container for the contact details (phone number and email)
const ContactDetails = styled.div`
  position: absolute;
  top: 60%;
  right: 8%;
  color: white;
  font-size: 1rem;
  text-align: center;
  z-index: 1;

  @media (max-width: 768px) {
    position: static; /* Remove absolute positioning for smaller screens */
    margin-top: 1rem; /* Add spacing above details */
  }
`;

// Styling for each contact detail (phone number and email)
const ContactItem = styled.p`
  margin: 5px 0;
  font-weight: bold;
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [response, setResponse] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Correcting handleSubmit to be async and handle fetch correctly
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple form validation
    if (formData.name && formData.email && formData.message) {
      try {
        const res = await fetch('http://localhost:5000/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        // Check if the response is successful
        if (res.ok) {
          setResponse('Thank you for contacting me! Your message has been sent.');
          setTimeout(() => setResponse(''), 4000); // Clear response after 4 seconds
          setFormData({ name: '', email: '', message: '' }); // Reset form
        } else {
          // Handle non-OK response (server error)
          setResponse('There was an error sending your message. Please try again later.');
        }
      } catch (error) {
        // Handle network errors or other issues
        setResponse('Network error. Please check your internet connection and try again.');
      }
    } else {
      setResponse('Please fill out all fields.');
    }
  };

  return (
    <ContactSection>
      {/* Profile image */}
      <ProfileImage src={require('../assets/images/hiya.jpg')} alt="hiya" />

      {/* Contact details (Phone and Email) */}
      <ContactDetails>
        <ContactItem>Phone: +91 7906472146</ContactItem>
        <ContactItem>Email: hiyasdrive@gmail.com</ContactItem>
        <ContactItem>Location: Meerut, Uttar Pradesh, India</ContactItem>
      </ContactDetails>

      <ContentWrapper>
        <Title>Contact Me</Title>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">Your Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Your Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="message">Your Message</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <SubmitButton type="submit">Send Message</SubmitButton>
        </Form>
        {response && <ResponseMessage success={response.includes('sent')}>{response}</ResponseMessage>}
      </ContentWrapper>
    </ContactSection>
  );
};

export default Contact;