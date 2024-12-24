import React from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Projects from './components/projects';
import Achievements from './components/Achievements';
import Blogs from './components/blogs';
import Contact from './components/contact';




function App() {
  return (
    <div className="App">
     
      <Navbar />
      <Hero />
      <Education/>
      <Projects /> 
      <Achievements />
      <Blogs />
      <Contact />
    
      
      
      
    </div>
    

  );
}

export default App;  
