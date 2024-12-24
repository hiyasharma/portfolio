import React from 'react';
import styled from 'styled-components';

// Styled button for the "Read the full blog" link

 const BlogButton = styled.a`
  display: inline-block;
  padding: 0.8rem 2rem;
  background-color: white;
  color: #3498db; /* Blue text color */
  font-size: 1rem;
  text-align: center;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s, transform 0.3s;
  margin-top: 1rem;
  border: 2px solid #3498db; /* Blue border to match text color */

  &:hover {
    background-color: #3498db; /* Blue background on hover */
    color: white; /* White text on hover */
    transform: translateY(-3px); /* Slight lift effect */
  }

  &:active {
    background-color: #2980b9; /* Darker blue on click */
    color: white; /* White text on click */
    transform: translateY(0); /* Reset lift effect when clicked */
  }
`;

// Container for the entire blogs section
const BlogsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 1rem;
  background: linear-gradient(135deg, #1e1e2f, #28293e);
  color: white;
  min-height: 100vh;
  position: relative;
`;

// Wrapper for blog content
const ContentWrapper = styled.div`
  max-width: 800px;
  width: 100%;
  z-index: 2;
`;

// Title for the blogs page
const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #fff;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
`;

// Blog post container
const BlogPost = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 10px;
  margin-bottom: 2rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

// Blog title (making the text bold)
const BlogTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #333;
  font-weight: bold;
`;

// Blog content (body of the blog post)
const BlogContent = styled.p`
  font-size: 1rem;
  color: #333;
  line-height: 1.6;
  font-weight: normal;
`;

// Author and date container
const AuthorDate = styled.div`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: #666;
  font-weight: bold;
`;

// Contact details section for blog author
const AuthorInfo = styled.div`
  margin-top: 2rem;
  color: #fff;
  font-size: 1rem;
  text-align: center;
`;

// Contact detail item styling (author name, email)
const AuthorItem = styled.p`
  margin: 5px 0;
  font-weight: 500;
`;

const Blogs = () => {
  return (
    <BlogsSection>
      {/* Blogs Page Title */}
      <Title>My Blogs</Title>

      <ContentWrapper>
        {/* Example of a blog post */}
        <BlogPost>
          <BlogTitle>Building Your First Java Web Application: A Step-by-Step Guide
          </BlogTitle>
          <BlogContent>
          This guide takes you through the process of creating your first Java web application. Using NetBeans, Apache Tomcat, and MySQL, you'll learn how to set up a development environment, build a simple web application, and connect it to a database. By the end, you'll have the foundational skills to develop and deploy Java web applications with confidence....         </BlogContent>
          <BlogButton href="https://first-java-webapp.blogspot.com/2024/12/building-your-first-java-web.html" target="_blank" rel="noopener noreferrer">
        Read the full blog
      </BlogButton>
          <AuthorDate>By: Hiya Sharma | Date: 17th Dec 2024</AuthorDate>
        </BlogPost>

        <BlogPost>
          <BlogTitle>More Blogs to Come</BlogTitle>
          <BlogContent>
            Stay Updated          </BlogContent>
        </BlogPost>
      </ContentWrapper>

     
    </BlogsSection>
  );
};

export default Blogs;
