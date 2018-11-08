import React from "react";

const Registry = () => <section className={"registry"}>
    <h1> Registry </h1>
    <p>
        Items in this list are design goals. Actual specification drafts will be
        published at a later time.
    </p>
    <div className={"registry-grid"}>
        <div>
            <h4>
                Decentralized
            </h4>
            <p>
                Prevents a single point of failure. Based on a public blockchain. Individual
                registry entries are controlled by their creators and private
                keys.
            </p>
        </div>
        <div>
            <h4>
                Permanent URIs
            </h4>
            <p>
                URIs are preserved, link rot is prevented.
            </p>
        </div>
        <div>
            <h4>
                Canonical URIs
            </h4>
            <p>
                Link equity is under direct control of a creator and can always
                be redirected from the registry URI to a creator's URI using the rel="canonical"
                tag attribute.
            </p>
        </div>
        <div>
            <h4>
                Pseudonymous
            </h4>
            <p>
                Provides a straightforward path for creators who prefer to publish their works
                under a pseudonym but would like an option to merge their identities in the future.
            </p>
        </div>
        <div>
            <h4>
                Open data
            </h4>
            <p>
                Registry APIs provide unlimited open access to registry data and offer great developer
                experience.
            </p>
        </div>
        <div>
            <h4>
                Governance
            </h4>
            <p>
                Subject to further research and analysis.
            </p>
        </div>

    </div>
</section>

export default Registry