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
  position: relative; /* Required for positioning the image */
`;

// Wrapper for content and form
// Wrapper for content and form
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 500px;
  width: 100%;
  z-index: 2; /* Ensure content stays above the image */
  margin-left: -50%; /* Shift form to the left by 10% */
`;



// Title styling
const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #fff;
  text-align: center;
  font-family: 'Roboto', sans-serif;
`;

// Form container
const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
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
  background-color:rgb(159, 190, 211) ;

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
  background-color:rgb(159, 190, 211);
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
  top: 25%;         /* Positioning from top */
  right: 20%;        /* Positioning from right */
  width: 220px;     /* Adjust width */
  height: 220px;    /* Adjust height */
  border-radius: 5%; /* Circular image */
  border: 3px solid #fff;  /* Optional border around the image */
  object-fit: cover; /* Ensures the image covers the given dimensions without stretching */
  z-index: 1;
`;

// Container for the contact details (phone number and email)
const ContactDetails = styled.div`
  position: absolute;
  top: 60%;         /* Adjust positioning below the image */
  right: 18%;        /* Positioning from the right */
  color: white;
  font-size: 1rem;
  text-align: center;
  z-index: 1;
`;


// Styling for each contact detail (phone number and email) (making the text bold)
const ContactItem = styled.p`
  margin: 5px 0;
  font-weight: bold;  /* Making the contact details text bold */
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

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple form validation
    if (formData.name && formData.email && formData.message) {
      setResponse('Thank you for contacting me! Your message has been sent.');
      setTimeout(() => setResponse(''), 4000); // Clear response after 4 seconds
      setFormData({ name: '', email: '', message: '' }); // Reset form
    } else {
      setResponse('Please fill out all fields.');
    }
  };

  return (
    <ContactSection>
      {/* Profile image */}
      <ProfileImage src="/assets/images/hiya.jpg" alt="hiya" />

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

export default Contact;
