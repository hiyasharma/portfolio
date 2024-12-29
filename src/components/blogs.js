import React from 'react';
import styled from 'styled-components';

// Styled button for the "Read the full blog" link
const BlogButton = styled.a`
  display: inline-block;
  padding: 0.8rem 2rem;
  background-color: white;
  color: #3498db;
  font-size: 1rem;
  text-align: center;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s, transform 0.3s;
  margin-top: 1rem;
  border: 2px solid #3498db;

  &:hover {
    background-color: #3498db;
    color: white;
    transform: translateY(-3px);
  }

  &:active {
    background-color: #2980b9;
    color: white;
    transform: translateY(0);
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
  animation: fadeIn 2s ease-in-out;
  
  

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

// Wrapper for blog content
const ContentWrapper = styled.div`
  max-width: 800px;
  width: 100%;
  z-index: 2;
`;

// Title for the blogs page
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
`;

// Blog post container
const BlogPost = styled.div`
  background-color: rgb(254, 246, 215);
  padding: 2rem;
  border-radius: 10px;
  margin-bottom: 2rem;
  box-shadow: 0 6px 9px rgba(197, 25, 25, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(225, 62, 162, 0.3);
  }
    border-color: rgba(222, 14, 52, 0.8); /* Highlighted border on hover */
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
          <BlogTitle>Building Your First Java Web Application: A Step-by-Step Guide</BlogTitle>
          <BlogContent>
            This guide takes you through the process of creating your first Java web application. Using NetBeans, Apache Tomcat, and MySQL, you'll learn how to set up a development environment, build a simple web application, and connect it to a database. By the end, you'll have the foundational skills to develop and deploy Java web applications with confidence....
          </BlogContent>
          <BlogButton href="https://first-java-webapp.blogspot.com/2024/12/building-your-first-java-web.html" target="_blank" rel="noopener noreferrer">
            Read the full blog
          </BlogButton>
          <AuthorDate>By: Hiya Sharma | Date: 17th Dec 2024</AuthorDate>
        </BlogPost>

        {/* New Blog Post */}
        <BlogPost>
          <BlogTitle>Building a Seamless User Registration and Login Workflow in a Java Web Application</BlogTitle>
          <BlogContent>
          In this blog, we delve into a common user registration and login workflow for Java web applications. Users fill out a registration form, receive a verification email, and activate their account via a secure link. Once verified, they can log in using their credentials. This guide provides a step-by-step approach to implementing this process efficiently and securely....
          </BlogContent>
          <BlogButton href="https://first-java-webapp.blogspot.com/2024/12/building-seamless-user-registration-and.html" target="_blank" rel="noopener noreferrer">
            Read the full blog
          </BlogButton>
          <AuthorDate>By: Hiya Sharma | Date: 29th Dec 2024</AuthorDate>
        </BlogPost>

        <BlogPost>
          <BlogTitle>More Blogs to Come</BlogTitle>
          <BlogContent>
            Stay Updated
          </BlogContent>
        </BlogPost>
      </ContentWrapper>
    </BlogsSection>
  );
};

export default Blogs;
