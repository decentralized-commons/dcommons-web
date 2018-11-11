import React from "react";
import {Highlight} from "./utils/Highlight";


const Attribution = () => {
    return <main>
        <h1 id="attribution">Attribution</h1>
        <p>Specifics of attribution requirement are inextricably bound with design of the DC BY license and
            registry.</p>
        <p>To provide context, we need to have a look at the Creative Commons attribution practices. </p>
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

    </main>;
};

export default Attribution;