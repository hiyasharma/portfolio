import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/projects';
import Blogs from './components/blogs';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/contact';
import styled from 'styled-components';

const Section = styled.div`
  scroll-margin-top: 80px;
  padding: 50px 20px;
  border-bottom: 1px solid #ccc;
  background: linear-gradient(135deg, #1e1e2f, #28293e);
`;

const App = () => {
  return (
    <div>
      <Navbar />
      <Section id="hero">
        <Hero />
      </Section>
      <Section id="projects">
        <Projects />
      </Section>
      <Section id="blogs">
        <Blogs />
      </Section>
      <Section id="education">
        <Education />
      </Section>
      <Section id="achievements">
        <Achievements />
      </Section>
      <Section id="contact">
        <Contact />
      </Section>
    </div>
  );
};

export default App;
