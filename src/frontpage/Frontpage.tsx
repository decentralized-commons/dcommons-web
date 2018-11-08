import DCBYvsCCBY from "./DCBYvsCCBY";
import ValueFlows from "./ValueFlows";
import Motivation from "./Motivation";
import Public from "./Public";
import Registry from "./Registry";
import FAQ from "./FAQ";
import "./Frontpage.css"
import React from "react"

const Frontpage = () => {
    return <div>
        <h1>DC-BY 0.1</h1>
        <div>
            <p>
                DC-BY license is a first Decentralized Commons project. DC-BY is a fork of Creative Commons
                CC-BY license that redirects link equity captured by the platforms to the original creators
                while
                preserving free culture protections for the public.
            </p>
            <p>
                <span style={{backgroundColor: "rgba(255,65,54, 0.5)"}}>The project is still in early stages and is under active development.</span>
            </p>
        </div>
        <section>
            <h1>Comparison of CC-BY and DC-BY</h1>
            <DCBYvsCCBY/>
        </section>
        <Motivation/>
        <Public/>
        <ValueFlows/>
        <Registry/>
        <FAQ/>
    </div>
}

export default Frontpage;