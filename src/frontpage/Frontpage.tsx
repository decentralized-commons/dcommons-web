import DCBYvsCCBY from "./DCBYvsCCBY";
import ValueFlows from "./ValueFlows";
import Motivation from "./Motivation";
import Public from "./Public";
import Registry from "./Registry";
import FAQ from "./FAQ";
import "./Frontpage.css";
import React from "react";
import {HighlightWarning as HW, HighlightDifference as HD} from "../utils/Highlight";

const Frontpage = () => {
    return <div className={"Frontpage"}>
        <section className={"Projects"}>
            <h1>Projects</h1>
            <p>
                Decentralized Commons initiative includes two projects: DC BY 0.1 and Authors Link Equity Regeneration
                Campaign
            </p>
            <p><HD>DC BY 0.1</HD> is a fork of Creative Commons BY license with modifications ensure that creators
                receive the majority of value from link equity created by attribution links.
            </p>
            <p>
                <HD>Authors Link Equity Regeneration Campaign</HD> is an action plan focused on healing the damage done
                to the
                commons by the
                exploitative rent-seeking behavior of megacorps.
            </p>
        </section>
        <h1>DC BY 0.1</h1>
        <div>
            <p>
            </p>
            <p>
                DC BY is a fork of Creative Commons CC BY license that redirects link equity captured by the platforms
                to the original creators while preserving free culture protections for the public.
            </p>
            <p>
                <HW>The project is still in early stages and is under active development.</HW>
            </p>
        </div>
        <section>
            <h1>Comparison of relevant CC BY and DC BY clauses</h1>
            <DCBYvsCCBY/>
        </section>
        <Motivation/>
        <Public/>
        <ValueFlows/>
        <Registry/>
        <FAQ/>
    </div>;
};

export default Frontpage;