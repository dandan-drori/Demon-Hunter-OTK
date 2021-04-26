import React from "react";
import styled from "styled-components";

const TableOfContents = () => {
  return (
    <>
      <SubHeader>Table Of Contents</SubHeader>
      <List>
        <Item>
          <Link href="#intro">Intro</Link>
        </Item>
        <Item>
          <Link href="#deck">Card List</Link>
        </Item>
        <Item sub>
          <Link href="#demon-hunter-cards">Demon Hunter Cards</Link>
        </Item>
        <Item sub>
          <Link href="#neutral-cards">Neutral Cards</Link>
        </Item>
        <Item>
          <Link href="#mulligan">Mulligan Guide</Link>
        </Item>
        <Item>
          <Link href="#strategy">Deck Strategy</Link>
        </Item>
        <Item sub>
          <Link href="#otk">The OTK</Link>
        </Item>
        <Item sub>
          <Link href="#tips">Final Tips</Link>
        </Item>
        <Item>
          <Link href="#log">Change Log</Link>
        </Item>
      </List>
    </>
  );
};

export default TableOfContents;

const Link = styled.a`
  color: #eee;
`;

const SubHeader = styled.h2`
  color: white;
  margin: 1rem 0;
`;

const List = styled.ul`
  padding-left: 3vw;
  margin-bottom: 1rem;
`;

const Item = styled.li`
  color: hsl(0, 0%, 70%, 1);
  font-weight: bold;
  margin-bottom: 0.3rem;

  margin-left: ${({ sub }) => (sub ? "1.3rem" : "0")};
  font-size: ${({ sub }) => (sub ? "0.95em" : "1em")};
`;
