import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TableOfContents from "./TableOfContents";
import CardList from "./CardList";
import DeckStrategy from "./DeckStrategy";
import Mulligan from "./Mulligan";
import Intro from "./Intro";
import ChangeLog from "./ChangeLog";
import { Header, FlexContainer } from "../Styled";
import { css } from "@emotion/core";
import PacmanLoader from "react-spinners/PacmanLoader";

const override = css`
  transform: translate(-180%, 350%);
`;

const Guide = () => {
  const [isLoading, setIsLoading] = useState(true);

  const firstPaint = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    setTimeout(firstPaint, 2000);
  }, []);

  return (
    <Container>
      {isLoading ? (
        <FlexContainer>
          <PacmanLoader
            color="var(--primary-color)"
            loading={isLoading}
            css={override}
            size={50}
          />
        </FlexContainer>
      ) : (
        <>
          <Header>Lifesteal OTK Demon Hunter</Header>
          <TableOfContents />
          <Intro />
          <CardList />
          <Mulligan />
          <DeckStrategy />
          <ChangeLog />
        </>
      )}
    </Container>
  );
};

export default Guide;

const Container = styled.div`
  padding: 1rem;
  background-color: hsl(215, 50%, 20%, 1);
  min-height: calc(100vh - 6rem);
`;
