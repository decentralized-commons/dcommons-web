import React from "react";
import {HighlightDifference as HD} from "./utils/Highlight";


const Attribution = () => {
    return <main>
        <h1 id="attribution">Attribution</h1>
        <p>This page explores attribution requirements for the DC BY license that are inextricably bound with a design
            of DC registry.</p>
        <p>To provide context, we start at looking at current Creative Commons attribution best practices. </p>
        <div>
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
                Link equity flow:
            </p>
            <ul>
                <li>Author -> to Flickr</li>
                <li>Source -> to Flickr</li>
                <li>License -> to creative commons website</li>
            </ul>

        </div>
        <h1 id="dc-by-attribution">DC BY attribution</h1>
        <div>
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
                    Author? “tvol” - linked to <HD>the author's domain</HD>
                </li>
                <li>
                    Source? “Creative Commons 10th Birthday Celebration San Francisco” - linked to <HD>the image page
                    on the author's domain</HD>
                </li>
                <li>
                    License? “DC BY 0.1” - linked to license deed
                </li>
            </ul>
            <p>
                Link equity flow:
            </p>
            <ul>
                <li>Author -> <HD>to author's website</HD></li>
                <li>Source -> <HD>to author's website</HD></li>
                <li>License -> to decentralized commons website</li>
            </ul>
            <p>
                Limitations:
            </p>
            <ul>
                <li>An author may not have a domain/website</li>
                <li>Domain registration fees may be too high</li>
                <li>Domain registration may not be renewed in time and domain will be snapped up by cybersquatters</li>
            </ul>
        </div>
        <div>
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
                    Author? “tvol” - linked to <HD>the author's page on the DC registry</HD>
                </li>
                <li>
                    Source? “Creative Commons 10th Birthday Celebration San Francisco” - linked to <HD>the image page
                    on the DC registry </HD>
                </li>
                <li>
                    License? “DC BY 0.1” - linked to license deed
                </li>
            </ul>
            <p>
                Link equity flow:
            </p>
            Link equity is transferred from registry URIs to URIs on the author's domain using rel="canonical" tag
            attribute.
            <ul>
                <li>Author -> <HD>to registry domain -> to author's website</HD></li>
                <li>Source -> <HD>to registry domain -> to author's website</HD></li>
                <li>License -> to decentralized commons website</li>
            </ul>
            <p>
                Limitations:
            </p>
            <ul>
                <li>Registry domain becomes a single point of failure for link equity of all creators</li>
            </ul>

        </div>
        <div>
            <h2>Variant 3</h2>
            <p>
                <a
                    href="http://dcommons-registry.com/timothyvollmer/8256206923">“Creative
                    Commons 10th Birthday Celebration San Francisco”</a> with <a
                href="http://tvol-3348431.dcr/8256206923">auxiliary registration</a> created by <a
                href="http://dcommons-registry.com/timothyvollmer/">tvol</a> with auxiliary registry account
                at <a href="http://tvol-3348431.dcr/8256206923">tvol</a> is licensed under <a
                href="https://www.decentralizedcommmons.com/by/0.1/">DC BY 0.1</a>
            </p>
            <p>
                Because:
            </p>
            <ul>
                <li>
                    Title? “Creative Commons 10th Birthday Celebration San Francisco”
                </li>
                <li>
                    Author? “tvol” - linked to <HD>the author's URI on the DC registry primary and auxiliary
                    domain </HD>
                </li>
                <li>
                    Source? “Creative Commons 10th Birthday Celebration San Francisco” - linked to <HD>the image
                    URI on the DC registry primary and auxiliary domain</HD>
                </li>
                <li>
                    License? “DC BY 0.1” - linked to license deed
                </li>
            </ul>
            <p>
                Link equity flow:
            </p>
            Link equity is transferred from registry URIs to the URIs on the author's domain using rel="canonical" tag
            attribute.
            <ul>
                <li>Author -> <HD>to primary registry domain -> to author's domain</HD></li>
                <li>Author -> <HD>to auxiliary registry domain -> to author's domain</HD></li>
                <li>Source -> <HD>to primary registry domain -> to author's domain</HD></li>
                <li>Source -> <HD>to auxiliary registry domain -> to author's domain</HD></li>
                main
                <li>License -> to decentralized commons website</li>
            </ul>
            <p>
                Limitations:
            </p>
            <ul>
                <li>Complexity of primary/auxiliary registry setup</li>
                <li>Attribution verbosity</li>
            </ul>

        </div>
    </main>;
};

export default Attribution;