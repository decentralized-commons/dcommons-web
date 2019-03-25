import React from "react";
import { HighlightDifference as HD } from "../utils/Highlight";
import { Link } from "react-router-dom";

const DCBYvsCCBY = () => {
  return (
    <div className={"comparison"}>
      <div className={"licenses-name"}>
        <a href="https://creativecommons.org/licenses/by/4.0/">CC 4.0 BY</a>
      </div>
      <div className={"licenses-name"}>DC 0.1 BY</div>
      <div>
        <p>
          This license lets others distribute, remix, tweak, and build upon your work, even commercially, as long as
          they credit you for the original creation.
        </p>
      </div>
      <div>
        <p>
          This license lets others distribute, remix, tweak, and build upon your work, even commercially, as long as
          they credit you for the original creation{" "}
          <HD> and to an extent practicable, value generated by the attribution is passed to you, the author</HD>.
        </p>
      </div>
      <div>
        <h5>Attribution</h5>
        <p>
          You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do
          so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.
        </p>
      </div>
      <div>
        <h5>Attribution</h5>
        <p>
          You must give appropriate credit, provide a link to the license,
          <HD> provide a link to an URI under direct author control</HD> and indicate if changes were made. You may do
          so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.
        </p>
      </div>
      <div>
        <h5>URI requirements</h5>
        <p>To the extent practicable, URI or link to the material if supplied.</p>
      </div>
      <div>
        <h5>URI requirements</h5>
        <p>
          {" "}
          To the extent practicable, URI or link to the material <HD>entry on the distributed commons registry</HD>.
        </p>
      </div>
      <div>
        <h5>Platform requirements</h5>
        <p>N/A</p>
      </div>
      <div>
        <h5>Platform requirements</h5>
        <p>
          <HD>
            Any website that hosts DC licensed content is explicitly forbidden to provide attribution linking to any URI
            that is not under direct author control.
          </HD>
        </p>
      </div>
      <p />
      <p>
        Further description of possible attribution requirements can be found on{" "}
        <Link to={"/attribution"}>this page</Link>.
      </p>
    </div>
  );
};
export default DCBYvsCCBY;
