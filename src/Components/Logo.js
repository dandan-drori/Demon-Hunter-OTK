import React from "react";
import styled from "styled-components";
import logo from "../Images/illidanHero.jpeg";

const Logo = () => {
  return <Container src={logo} alt="demon hunter" />;
};

export default Logo;

const Container = styled.img`
  margin-left: 1.5rem;
  width: 75px;
  height: 75px;
  border-radius: 50%;
  display: flex;
`;
