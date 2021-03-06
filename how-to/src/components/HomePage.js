import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const GradientBg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  min-height: 100vh;
  background-image: radial-gradient(circle, #fefb6b 25%, #ff9505, #ec4e20);
`;

const Title = styled.h1`
  font-family: "Lobster", cursive;
  font-size: 4rem;
`;

const HomePage = props => {
  return (
    <GradientBg>
      <Title>Knowledge for Everyone</Title>
      <h2>Sign Up for free knowledge today!</h2>
      <Link
        to="/signup"
        style={{
          backgroundColor: "white",
          border: "none",
          borderRadius: "15px",
          padding: "0.5% 2%"
        }}
      >
        Click here to get started!
      </Link>
    </GradientBg>
  );
};

export default HomePage;
