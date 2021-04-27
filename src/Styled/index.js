import styled from "styled-components";

const Rarity = styled.span`
  color: ${({ r }) =>
    r === "legendary"
      ? "hsl(27, 100%, 50%, 1)"
      : r === "epic"
      ? "hsl(285, 90%, 47%, 1)"
      : r === "rare"
      ? "hsl(205, 100%, 50%, 1)"
      : "white"};
  text-decoration: ${({ n }) => (n ? "none" : "underline")};
  font-weight: ${({ n }) => (n ? "bold" : "regular")};
`;

const Header = styled.h1`
  color: white;
  margin: 1rem 0;
`;

const SubHeader = styled.h2`
  color: white;
  margin: 1rem 0;
`;

const Link = styled.a`
  color: #eee;
`;

const Text = styled.p`
  color: #ddd;
  font-size: 110%;
  margin-bottom: 1rem;
  max-width: 80%;

  @media only screen and (min-width: 768px) {
    max-width: 60%;
  }
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

const Bold = styled.span`
  font-weight: bold;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export {
  Rarity,
  Header,
  SubHeader,
  Text,
  List,
  Item,
  Link,
  Bold,
  FlexContainer,
};
