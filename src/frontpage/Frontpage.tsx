import DCBYvsCCBY from "./DCBYvsCCBY";
import ValueFlows from "./ValueFlows";
import Motivation from "./Motivation";
import Public from "./Public";
import Registry from "./Registry";
import FAQ from "./FAQ";
import "./Frontpage.css";
import React from "react";
import {HighlightWarning as HW} from "../utils/Highlight";

const Frontpage = () => {
    return <div>
        <h1>DC BY 0.1</h1>
        <div>
            <p>
                DC BY license is a first Decentralized Commons project.
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