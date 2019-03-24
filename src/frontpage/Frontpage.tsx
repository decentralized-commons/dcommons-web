import styled from "styled-components/macro";
import DCBYvsCCBY from "./DCBYvsCCBY";
import ValueFlows from "./ValueFlows";
import Motivation from "./Motivation";
import Public from "./Public";
import Registry from "./Registry";
import FAQ from "./FAQ";
import React from "react";
import { HighlightWarning as HW, HighlightDifference as HD } from "../utils/Highlight";
import { Link } from "react-router-dom";

const Frontpage = () => {
  return (
    <FrontpageStyled>
      <section className={"Projects"}>
        <h1>Projects</h1>
        <p>
          Decentralized Commons initiative includes two projects: DC BY 0.1 and Authors Link Equity Regeneration
          Campaign
        </p>
        <p>
          <HD>DC BY 0.1</HD> is a fork of Creative Commons BY license with modifications ensure that creators receive
          the majority of value from link equity created by attribution links.
        </p>
        <p>
          <Link to={"/alerc"}>
            <HD>Authors Link Equity Regeneration Campaign</HD>
          </Link>{" "}
          is an action plan focused on healing the damage done to the commons by the exploitative rent-seeking behavior
          of megacorps.
        </p>
      </section>
      <h1>DC BY 0.1</h1>
      <div>
        <p />
        <p>
          DC BY is a fork of Creative Commons CC BY license that redirects link equity captured by the platforms to the
          original creators while preserving free culture protections for the public.
        </p>
        <p>
          <HW>The project is still in early stages and is under active development.</HW>
        </p>
      </div>
      <Motivation />
      <section>
        <h1>Comparison of relevant CC BY and DC BY clauses</h1>
        <DCBYvsCCBY />
      </section>
      <Public />
      <ValueFlows />
      <Registry />
      <FAQ />
    </FrontpageStyled>
  );
};

const FrontpageStyled = styled.div`
  

  .Frontpage h1 {
  }

  .Frontpage .Projects .container {
    display: flex;
    justify-content: space-between;
  }
`;

export default Frontpage;
