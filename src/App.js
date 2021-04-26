import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Nav } from "generic-reusable-components";
import WelcomePage from "./Components/WelcomePage";
import Cheatsheet from "./Components/Cheatsheet";
import Guide from "./Components/Guide";
import Logo from "./Components/Logo";
import GlobalStyle from "./Styled/GlobalStyle";

const App = () => {
  const links = [
    {
      to: "/",
      text: "Home",
    },
    {
      to: "/cheatsheet",
      text: "Cheatsheet",
    },
    {
      to: "/guide",
      text: "Guide",
    },
  ];

  return (
    <Router>
      <Nav
        logo={<Logo />}
        links={links}
        containerHeight="6rem"
        containerBgColor="hsl(358, 51%, 28%, 1)"
        containerPadding="0.5rem"
        linkFontSize="1.3em"
        linkItemMargin="0rem"
        linkColor="white"
      />
      <GlobalStyle />
      <Switch>
        <Route path="/" exact>
          <WelcomePage
            containerBgColor="hsl(215, 50%, 20%, 1)"
            containerPadding="5vh 10vw"
            header="Welcome!"
            subHeader="Let's go OTK Demon Hunter"
            subSubHeader="Explore the OTK lethal Cheatsheet and Guide"
          />
        </Route>
        <Route path="/cheatsheet">
          <Cheatsheet />
        </Route>
        <Route path="/guide">
          <Guide />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
