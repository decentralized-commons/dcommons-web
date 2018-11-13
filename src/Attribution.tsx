import React from "react";
import {Highlight} from "./utils/Highlight";


const Attribution = () => {
    return <main>
        <h1 id="attribution">Attribution</h1>
        <p>This page explores attribution requirements for the DC BY license that are inextricably bound with a design
            of DC registry.</p>
        <p>To provide context, we start at looking at current Creative Commons attribution best practices. </p>
        <h1 id="cc-by-attribution">CC BY attribution</h1>
        <p><a href="https://wiki.creativecommons.org/wiki/Best_practices_for_attribution">
            Best practices for attribution</a> from Creative Commons guidelines:</p>
        <p>This is an ideal attribution for CC licenses: <a
            href="https://www.flickr.com/photos/sixteenmilesofstring/8256206923/in/set-72157632200936657">“Creative
            Commons 10th Birthday Celebration San Francisco”</a> by <a
            href="https://www.flickr.com/photos/sixteenmilesofstring/">tvol</a> is licensed under <a
            href="https://creativecommons.org/licenses/by/2.0/">CC BY 2.0</a></p>

        <p>
            Because:
        </p>
        <ul>
            <li>
                Title? “Creative Commons 10th Birthday Celebration San Francisco”
            </li>
            <li>
                Author? “tvol” - linked to his profile page
            </li>
            <li>
                Source? “Creative Commons 10th Birthday Celebration San Francisco” - linked to original
                Flickr page
            </li>
            <li>
                License? “CC BY 2.0” - linked to license deed
            </li>
        </ul>
        <p>
            Links equity flow:
        </p>
        <ul>
            <li>Author -> to Flickr</li>
            <li>Source -> to Flickr</li>
            <li>License -> to creative commons website</li>
        </ul>
        <h1 id="dc-by-attribution">DC BY attribution</h1>
        <h2>Variant 1</h2>
        <p><a
            href="http://timothyvollmer.com/8256206923">“Creative
            Commons 10th Birthday Celebration San Francisco”</a> by <a
            href="http://timothyvollmer.com">tvol</a> is licensed under <a
            href="https://www.decentralizedcommmons.com/by/0.1/">DC BY 0.1</a></p>
        <p>
            Because:
        </p>
        <ul>
            <li>
                Title? “Creative Commons 10th Birthday Celebration San Francisco”
            </li>
            <li>
                Author? “tvol” - linked to <Highlight>the author's domain</Highlight>
            </li>
            <li>
                Source? “Creative Commons 10th Birthday Celebration San Francisco” - linked to <Highlight>the image page
                on the author's domain</Highlight>
            </li>
            <li>
                License? “DC BY 0.1” - linked to license deed
            </li>
        </ul>
        <p>
            Links equity flow:
        </p>
        <ul>
            <li>Author -> <Highlight>to author's website</Highlight></li>
            <li>Source -> <Highlight>to author's website</Highlight></li>
            <li>License -> to decentralized commons website</li>
        </ul>
        <p>
            Limitations:
        </p>
        <ul>
            <li>An author may not have a domain/website</li>
            <li>Domain registration fees may be too high</li>
            <li>Domain registration may not be renewed in time and domain will be registers by cybersquatters</li>
        </ul>
        <h2>Variant 2</h2>
        <p><a
            href="http://dcommons-registry.com/timothyvollmer/8256206923">“Creative
            Commons 10th Birthday Celebration San Francisco”</a> by <a
            href="http://dcommons-registry.com/timothyvollmer/">tvol</a> is licensed under <a
            href="https://www.decentralizedcommmons.com/by/0.1/">DC BY 0.1</a></p>
        <p>
            Because:
        </p>
        <ul>
            <li>
                Title? “Creative Commons 10th Birthday Celebration San Francisco”
            </li>
            <li>
                Author? “tvol” - linked to <Highlight>the author's page on the DC registry</Highlight>
            </li>
            <li>
                Source? “Creative Commons 10th Birthday Celebration San Francisco” - linked to <Highlight>the image page
                on the DC registry </Highlight>
            </li>
            <li>
                License? “DC BY 0.1” - linked to license deed
            </li>
        </ul>
        <p>
            Links equity flow:
        </p>
        Link equity is transferred from registry URIs to URIs on the author's domain using rel="canonical" tag
        attribute.
        <ul>
            <li>Author -> <Highlight>to registry domain -> to author's website</Highlight></li>
            <li>Source -> <Highlight>to registry domain -> to author's website</Highlight></li>
            <li>License -> to decentralized commons website</li>
        </ul>
        <p>
            Limitations:
        </p>
        <ul>
            <li>Registry domain becomes a single point of failure for link equity of all creators</li>
        </ul>
    </main>;
};

export default Attribution;