import React, {Component} from "react";
// @ts-ignore
import Mermaid from "../mermaid/Mermaid";

const ValueFlows = () => <section className={"value-flows"}>
    <h1>Value flows</h1>
    <div>Dotted and solid arrows indicate low value and high value flows respectively.</div>
    <h2>CC BY</h2>
    <div style={{textAlign: "center", width: "100%"}}>
        <Mermaid id={"mermaid-cc-value-flow"} content={`
                        graph LR;
                            Author-->|uploads material|Platform;
                            Platform -->|distributes material|Public;
                            Public-->|consumes targeted ads|Platform;
                            Public-->|attributes with hyperlink|Platform;
                            Public-.attributes with exposure.->Author;
                        `}/>

    </div>
    <h2>DC BY</h2>

    <div style={{textAlign: "center", width: "100%"}}>
        <Mermaid id={"mermaid-dc-value-flow"} content={`
                        graph LR;
                            Author-->|uploads material|Platform;
                            Public-->|consumes targeted ads|Platform;
                            Platform -->|distributes material|Public;
                            Public-->|attributes with hyperlink|Author;
                            Public-.attributes with exposure.->Author;
                        `}/>
    </div>
</section>


export default ValueFlows
