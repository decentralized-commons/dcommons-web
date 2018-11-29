import React from "react";

const ALERC = () => {
    return <div className={"ALERC"}>
        <h1>
            Authors Link Equity Regeneration Campaign
        </h1>
        <p>
            <ul>
                <li>
                    Educate authors on importance of link equity and ways to generate intrinsic and extrinsic value from
                    it
                </li>
                <li>
                    Create a step by step checklist for creators on scrappy and sustainable way to host their own
                    domains and canonical URLs
                </li>
                <li>
                    Analyze and quantify link graphs data using Common Crawl project
                </li>
                <li>
                    Build a provisional registry of canonical URLs
                </li>
                <li>
                    Work with Wikipedia to replace links to hosting platforms with links to authors' domains
                </li>
                <li>
                    Build tools to scan the internet for links pointing to hosting platforms and automagically replace
                    attribution to authors' websites, for example, using a Wordpress plugin
                </li>
                <li>
                    Build social media bots that attempt to detect Creative Commons images and automatically post
                    attribution data
                </li>
            </ul>
        </p>
        <h1>
            Link equity transfer using rel="canonical"
        </h1>
        <p>
            There is a standard <a href={"https://tools.ietf.org/html/rfc6596"}>RFC6596</a>, cheap and technically
            simple
            way for any website to redirect link equity by using a canonical link relation.

            Rel="canonical" is supported by Google, Yahoo and Bing.

            <h3>
                Further reading
            </h3>
            <ul>
                <li>
                    <a href="https://support.google.com/webmasters/answer/139066?hl=en"> Google</a>
                </li>
                <li>
                    <a href="https://moz.com/blog/rel-canonical"> Moz.com</a>
                </li>
                <li>
                    <a href={"https://en.wikipedia.org/wiki/Canonical_link_element"}>Canonical link element on Wikipedia
                    </a>
                </li>
            </ul>

            Implementation of rel="canonical" link tag by platforms for Creative Commons works would immediately restore an enormous
            amount of value for CC-licensed authors. Unfortunately, platforms and authors incentives are not aligned and it
            would be naive to assume that platforms would release captured link equity.

        </p>
    </div>;
};

export default ALERC;
