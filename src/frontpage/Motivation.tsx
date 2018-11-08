import React from "react";

const CcAttributionDetailsLink = ({children}: { children: string }) => <a
    href={"https://wiki.creativecommons.org/wiki/License_Versions#Detailed_attribution_comparison_chart"}>{children}</a>;

const LinkEquityExplanationLink = () => <a href={"https://moz.com/learn/seo/what-is-link-equity"}>link equity</a>;
const CcStatsLink = ({children}: { children: string }) => <a
    href={"https://stateof.creativecommons.org/"}>{children}</a>;

const Motivation = () => <section className={"motivation"}>
    <h1>Motivation</h1>
    <p>
        A core tenet of Creative Commons licenses is attribution requirement.

        Terms of CC 4.0 licenses specifically include
        this <CcAttributionDetailsLink>clause</CcAttributionDetailsLink>: "...to the extent
        practicable, URI or link to the material if supplied".
    </p>
    <p>
        In an online context, the most significant component of HTML link value generation for a
        link recipient
        is <LinkEquityExplanationLink/>. Link equity is an abstraction that describes a
        influence of the given link metrics on the rankings of search engine results
        page(SERP). In general, increase in link equity meant higher positions in SERP and more
        traffic from search engines.
    </p>
    <p>
        When web was young and brimming with independent and hobbyist projects, links were the
        currency of the internet. Several hundred high quality links from authoritative domains
        generated as much value as a professionally done advertising campaign.
    </p>
    <p>
        As web evolved, network effects and misalignment of incentives, among other reasons,
        prevented
        authors from being practically able to host their own content.

        As as a result, when platforms offered an option to apply a CC license to an uploads and
        most uploaders did not have a personal website, CC attribution
        linked to the authors' page on platform's website. As a result most value from
        the attribution was captured by platforms, stripping creators of billions of value in
        organic search engine
        marketing.

        The largest offenders are Youtube and Flickr, that at some point were owned and operated by
        the
        largest search engines in the world. This wasn't a mistake or a oversight. Hanlon's Razor
        doesn't apply.
    </p>
    <p>
        There are at least <CcStatsLink>1.4 billion CC-licensed works</CcStatsLink> at least 35% of
        them are hosted on Flickr, Youtube, DeviantArt where attributions link to the hosting
        platform, not an artist.
    </p>
    <p>
        This is at 500 million works where link equity was taken from the rightful artist.
        DC-BY goal is to change that.
    </p>
</section>

export default Motivation