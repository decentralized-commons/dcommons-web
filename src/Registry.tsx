import React from "react";
import Mermaid from "./mermaid/Mermaid";
import {HighlightWarning as HW} from "./utils/Highlight";

const Registry = () => <main>
    <h1>
        Decentralized registry design
    </h1>
    <p>
        This page explores a possible design of the decentralized registry. <HW>Registry design is a work in
        progress. </HW>
    </p>
    <h2>
        Goals
    </h2>
    <ul>
        <li> Provide a reliable, free hosting of canonical attribution URIs for DC licensed works for creators</li>
        <li> Guarantee creators control of their link equity</li>
        <li> Provide a safe, privacy oriented experience for both creators and registry users</li>
        <li> Provide permissionless access to open data and public APIs</li>
    </ul>
    <h2>
        Non-goals
    </h2>
    <ul>
        <li>
            Host images, videos or other resource consuming media formats. Registry will allow linking and embed
            media either from blockchain-based decentralized storage and/or IPFS/Dat .
        </li>
    </ul>
    <h1>
        Why blockchain?
    </h1>
    <p>
        Decentralization is a core tenet of Decentralized Commons and blockchain-based tech is the only practical option
        that enables decentralized organization.
    </p>
    <p>
        Unlike ordinary SQL/NoSQL/NewSQL databases, public blockchains provide at least some degree of immutability,
        trustlessness and tamper-proof audit trails.

        Building the registry on public blockchain also discourages any future attempts to limit or cripple open API
        access to
        the registry.
    </p>
    <h1>
        Single points of failure
    </h1>
    <p>
        Probably the most significant part of the registry design deals with single point of failures. Registry's domain
        and lack of options for decentralized management of such domain is one of these single points of failure.

        If the registry domains goes down, it takes all of the authors' link equity with it.
    </p>
    <h2>
        Link equity transfer
    </h2>
    <Mermaid id={"registry-flowchart"} content={`
    graph TD
    A[www.techblog.io] -- Attribution link --> B((Registry))
    A1[www.mainstreammedia.com] -- Attribution link --> B((Registry))
    A2[www.nonprofit.org] -- Attribution link --> B((Registry))
    B --through canonical URI--> D{Creator's website}`}>
    </Mermaid>
</main>;

export default Registry;