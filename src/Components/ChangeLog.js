import React from "react";
import styled from "styled-components";
import { SubHeader } from "../Styled";

const ChangeLog = () => {
  return (
    <>
      <SubHeader id="log">Changelog</SubHeader>
      <Log>26.04.21 - Guide added.</Log>
    </>
  );
};

export default ChangeLog;

const Log = styled.p`
  color: #ddd;
  font-size: 110%;
  margin-bottom: 1rem;
  max-width: 60%;
  border: 2px solid #ccc;
  padding: 1rem;
`;
