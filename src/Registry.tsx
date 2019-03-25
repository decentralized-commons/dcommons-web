import React from "react";
import Mermaid from "./mermaid/Mermaid";
import { HighlightWarning as HW } from "./utils/Highlight";

const Registry = () => (
  <main>
    <h1>Decentralized registry design</h1>
    <p>
      This page explores a possible design of the decentralized registry. <HW>This is a work in progress. </HW>
    </p>
    <h2>Goals</h2>
    <p>
      <ul>
        <li> Provide a reliable, free hosting of canonical attribution URIs for DC BY licensed works for creators</li>
        <li> Guarantee creators future control of their link equity</li>
        <li> Provide a safe, privacy-oriented experience for both creators and registry users</li>
        <li> Provide open, permissionless access to registry data and public APIs</li>
      </ul>
    </p>
    <h2>Non-goals</h2>
    <p>
      <ul>
        <li>Provide hosting for images, videos or other resource consuming media formats.</li>

        <li>
          Registry will allow linking and embedding media from centralized platforms, blockchain based decentralized
          storage and content addressable storages like IPFS or Dat.
        </li>
      </ul>
    </p>
    <h1>Components</h1>
    <p>
      <ul>
        <li>
          URI entries
          <ul>
            <li>Name conflicts</li>
          </ul>
        </li>
        <li>
          Moderation
          <ul>
            <li>Conflict resolution</li>
            <li>Peer review</li>
          </ul>
        </li>
        <li>
          Attribution
          <ul>
            <li>Static attribution</li>
            <li>Dynamic attribution embeds</li>
            <li>URI management</li>
            <li>Legal compliance</li>
          </ul>
        </li>
        <li>
          Content
          <ul>
            <li>Embedded media loaded directly from hosting platforms</li>
          </ul>
        </li>
        <li>User Experience</li>
        <li>Developer Experience</li>
        <li>Ecosystem</li>
      </ul>
    </p>
    <h1>Why blockchain?</h1>
    <p>
      Decentralization is a core tenet of Decentralized Commons and blockchain-based tech is the only practical option
      that enables decentralized organizations.
    </p>
    <p>
      Unlike ordinary SQL/NoSQL/NewSQL databases, public blockchains provide at least some degree of immutability,
      trustlessness and tamper-proof audit trails. Building the registry on public blockchain also discourages any
      future attempts to limit or cripple open API access to the registry.
    </p>
    <h1>Scaling</h1>
    <p>
      There are hundreds of millions of CC-licensed works. No public blockchain is able to handle even a small fraction
      of transactions required by the DC registry. Therefore, possible solutions to scaling will be either Level 2 of a
      public blockchain or a new non-PoW public blockchain.
    </p>
    <h1>Single points of failure</h1>
    <p>
      Probably the most significant part of the registry design deals with single point of failures. Registry's domain
      and lack of options for decentralized management of such domain is one of these single points of failure. If the
      registry domains goes down, it takes all of the authors' link equity with it.
    </p>
    <h1>Domains</h1>
    <p>
      Domains are a crucial element of the registry architecture. Any domain used by the registry needs to have a valid
      DNS entry to enable search engines to index pages and follow rel="canonical" links.
    </p>

    <p>
      The following redundancy options could be utilized to prevent a single point of failure:
      <ul>
        <li>Registry domain in the .com TLD owned by a non-profit organization</li>
        <li>
          Individual domains per every creator registered in the registry top level domain, e.g. alice.dcr where .dcr
          stands for decentralized commons registry. TLD is owned by a separate non-profit organization.
        </li>
        <li>
          Individual domains owned by the content creator in any TLD. To prevent link rot, registry would enforce long
          term registrations of the domains. Sponsorhips could be offered for domain registration to select creators.
        </li>
        <li>Round robin attribution to multiple domains operated by multiple organizations.</li>
        <li>Dynamic attribution with data and metadata fetched directly from the decentralized registry.</li>
      </ul>
    </p>
    <p>
      Every domain under control of stewardship organizations would pass the link equity to the domain owned by an
      author. All stewardship organizations would sync their records with registry URI entries.
    </p>
    <h2>Link equity transfer flowchart</h2>
    <Mermaid
      id={"registry-flowchart"}
      content={`
    graph TD
    A[www.techblog.io] -- Attribution link --> B((Primary Registry))
    A1[www.mainstreammedia.com] -- Attribution link --> B((Primary Registry))
    A2[www.nonprofit.org] -- Attribution link --> B((Primary Registry))
    A[www.techblog.io] -- Attribution link --> B1((Auxiliary Registry))
    A1[www.mainstreammedia.com] -- Attribution link --> B1((Auxiliary Registry))
    A2[www.nonprofit.org] -- Attribution link --> B1((Auxiliary Registry))
    B --through canonical URI--> D{Creator's domain}
    B1 --through canonical URI--> D{Creator's domain}
    `}
    />
  </main>
);

export default Registry;
