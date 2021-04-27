import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { rowsData, headersData } from "../Data";
import { css } from "@emotion/core";
import PacmanLoader from "react-spinners/PacmanLoader";

const override = css`
  transform: translate(-180%, -100%);
`;

const CheatSheet = () => {
  const [isLoading, setIsLoading] = useState(true);

  const firstPaint = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    setTimeout(firstPaint, 1500);
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
        <Table>
          <Caption>OTK Demon Hunter CheatSheet</Caption>
          <TableRow>
            {headersData.map((h) => (
              <TableHeader>{h.t}</TableHeader>
            ))}
          </TableRow>
          {rowsData.map((r) => (
            <TableRow>
              <TableData content={r.m}>{r.m}</TableData>
              <TableData content={r.t}>{r.t}</TableData>
              <TableData content={r.b}>{r.b}</TableData>
              <TableData content={r.f}>{r.f}</TableData>
              <TableData content={r.e}>{r.e}</TableData>
              <TableData content={r.r}>{r.r}</TableData>
              <TableData content={r.d}>{r.d}</TableData>
            </TableRow>
          ))}
        </Table>
      )}
    </Container>
  );
};

export default CheatSheet;

const Container = styled.div`
  padding: 1rem;
  background-color: hsl(215, 50%, 20%, 1);
  height: calc(100vh - 6rem);
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const Table = styled.table`
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
`;

const Caption = styled.caption`
  margin: 1rem 0;
  font-size: 1.4em;
  font-weight: bold;
  text-decoration: underline;
  color: hsl(106, 57%, 33%, 1);
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #dddddd;
    background-color: hsl(106, 57%, 33%, 1);
  }
`;

const TableHeader = styled.th`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 0.5rem;
`;

const TableData = styled.td`
  border: 1px solid #dddddd;
  padding: 0.5rem;
  color: ${({ content }) =>
    content === "no"
      ? "#0000ff"
      : content === "yes"
      ? "#ff00ff"
      : content === "240"
      ? "#ff0000"
      : content === "120"
      ? "#ff2200"
      : content === "60"
      ? "#ff4400"
      : content === "48"
      ? "#ff6600"
      : content === "45"
      ? "#ff8800"
      : content === "36"
      ? "#ffaa00"
      : content === "24"
      ? "#ffcc00"
      : content === "18"
      ? "#ffee00"
      : content === "12"
      ? "#ffff00"
      : content !== "0"
      ? "#ccc"
      : "black"};
  font-weight: ${({ content }) =>
    content === "2" ? "bold" : content === "3" ? "bolder" : "regular"};
`;
