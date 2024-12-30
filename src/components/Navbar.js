import React, { useState } from 'react'; // React and useState for managing state
import styled from 'styled-components'; // styled-components for styled elements


const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #000;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  border-radius: 50px;
  border: 2px solid white;
  box-sizing: border-box;

 @media (max-width: 768px) {
    padding: 0.5rem; /* Reduced padding for mobile */
  }
`;

const Logo = styled.h1`
  font-size: 2rem;
  font-family: 'Dancing Script', cursive;
  margin: 0;
  color: white;
  letter-spacing: 1px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: ${(props) => (props.open ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 60px; /* Adjust if needed */
    right: 0;
    background: #333;
    width: 100%; /* Full width for mobile */
    padding: 1rem 0;
    overflow: hidden;
    border-radius: 0 0 10px 10px;
  }
`;


const StyledLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  position: relative;
  transition: color 0.3s ease, transform 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #f5a623;
    transform: scale(1.1);
  }

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 3px;
    background: #f5a623;
    left: 50%;
    bottom: -5px;
    transition: width 0.3s ease, left 0.3s ease;
  }

  &:hover::after {
    width: 100%;
    left: 0;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem; /* Adjust for mobile */
  }
`;


const MenuToggle = styled.div`
  display: none;
  flex-direction: column;
  gap: 0.2rem;
  cursor: pointer;

  span {
    width: 25px;
    height: 3px;
    background: white;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMenuOpen(false);
    }
  };

  return (
    <Nav>
      <Logo>Hiya Sharma</Logo>
      <NavLinks open={menuOpen}>
        <StyledLink onClick={() => handleScroll('hero')}>About</StyledLink>
        <StyledLink onClick={() => handleScroll('projects')}>Projects</StyledLink>
        <StyledLink onClick={() => handleScroll('blogs')}>Blogs</StyledLink>
        <StyledLink onClick={() => handleScroll('education')}>Education</StyledLink>
        <StyledLink onClick={() => handleScroll('achievements')}>Achievements</StyledLink>
        <StyledLink onClick={() => handleScroll('contact')}>Contact</StyledLink>
      </NavLinks>
      <MenuToggle onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </MenuToggle>
    </Nav>
  );
};

export default Navbar;
