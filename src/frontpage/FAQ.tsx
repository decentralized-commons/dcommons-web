import React, {Component} from "react";

const FAQ = () => <section className={"faq"}>
    <h1>FAQ</h1>
    <div className={"question-answers"}>
        <div>What is a possible future for DC-BY?</div>
        <div>
            <p>
                The best outcome would probably result in merger of the DC-BY license into the Creative Commons mainline
                under
                the stewardship of Creative Commons foundation.
            </p>
        </div>
        <div>Why would I want to use DC-BY vs CC-BY?</div>
        <div>
            <p>
                At this moment, you shouldn't use any DC license for any of your works.
                DC-BY is under active development and wasn't validated.
            </p>
            <p>
                When the license terms will be finalized, you would want to use DC-BY license if you
                can
                imagine a way to obtain economical or non-economical value from the increased number
                of visitors to
                your website.
            </p>
        </div>
        <div>What is a decentralized registry?</div>
        <div>
            <p>
                Decentralized registry is a smart contract built on a public blockchain or an instance of public
                blockchain where
                pages hosting the content are controlled only by the private keys of the author.
            </p>
            <p>
                Design of a decentralized registry and public blockchain choice is subject to
                research, prototyping and testing.
            </p>
        </div>
        <div>What are the components of a decentralized registry?</div>
        <div>
            <ul>
                <li>
                    A suite of smart contracts or a blockchain
                </li>
                <li>
                    Web app for creators and public
                </li>
                <li>
                    Browser extensions
                </li>
                <li>
                    Mobile apps
                </li>
            </ul>
            <p>
                The goal of a DC registry is to provide a reliable support net for creators, not become a
                maintenance
                liability.
            </p>
        </div>
        <div>
            I have some questions. How do I contact you?
        </div>
        <div>
            Get in touch at <a
            href="mailto:ontofractal@protonmail.com">ontofractal@protonmail.com</a>
        </div>
    </div>
</section>

export default FAQ
