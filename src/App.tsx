import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components/macro";
import Frontpage from "./frontpage/Frontpage";
import ALERC from "./ALERC";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router";

import Header from "./Header";
import Registry from "./Registry";
import Attribution from "./Attribution";
import Nav from "./Nav";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <GlobalStyle />
        <AppStyled>
          <Switch>
            <Route exact path="/" component={Header} />
            <Route path="/" component={Nav} />
          </Switch>
          <main>
            <Switch>
              <Route exact path="/" component={Frontpage} />
              <Route exact path="/alerc" component={ALERC} />
              <Route exact path="/registry" component={Registry} />
              <Route exact path="/attribution" component={Attribution} />
            </Switch>
          </main>
          <footer />
        </AppStyled>
      </BrowserRouter>
    );
  }
}

const GlobalStyle = createGlobalStyle`
body {
    margin: auto;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    background-color: beige;
}

code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}


a:hover {
    color: hotpink;
}

a:active {
    color: blue;
}

h1, h2, h3, h4, h5, h6 {
    font-family: 'Exo', sans-serif;
}


#root {
    display: flex;
    justify-content: center;
}


.mermaid .node rect {
    fill: white !important;
}

.mermaid .edgeLabel {
    background-color: white !important;
}


footer {
    height: 50px;
}
`;

const AppStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1000px;
  margin-right: 5%;
  margin-left: 5%;

  > p {
    font-size: 18px;
    text-align: justify;
  }

  .licenses-name {
    font-size: 20px;
    font-family: Rosario, "sans-serif";
  }

  section {
    margin-top: 50px;
  }

  main .comparison {
    display: grid;
    grid-column-gap: 10%;
    grid-template-columns: 45% 45%;
  }

  main .licenses {
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto;
  }

  main .clauses {
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto;
  }

  main .comparison h5 {
    font-size: 18px;
  }

  main .question-answers > :nth-child(odd) {
    margin-top: 20px;
    margin-bottom: 5px;
    color: black;
    font-style: italic;
    font-size: 18px;
  }

  main .question-answers > :nth-child(even) {
  }

  main .registry-grid {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-column-gap: 5%;
    justify-content: space-around;
  }

  main .value-flows {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .registry-grid p {
    font-size: 16px;
  }
`;

export default App;
