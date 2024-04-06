// Basic Imports
import React from "react";
import Link from "next/link";

// Components Imports
import Callout from "@/components/ui-patterns/Callout";
import Button from "@/components/ui-patterns/Button";

const OrganizeWithUs: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <section className="organize-with-us-section checks-container max-sm:py-12 ">
        <div className="organize-with-us__cta-content-wrapper mt-12 w-fit h-auto mx-auto flex flex-col items-center justify-between mb-16 max-sm:mt-0 max-sm:mb-0">
          <Callout>{"Collaborate with us"}</Callout>
          <h1 className="font-product-bungee text-6xl flex flex-col items-center justify-start gap-4 mt-6 max-sm:text-3xl max-sm: max-sm:gap-1">
            <span>{"Organize an event"}</span>
            <span>{"with local-hub"}</span>
          </h1>
          <div className="cta-buttons-layer-wrapper mt-12 flex flex-row items-center justify-center gap-8 w-fit h-auto max-sm:flex-col">
            <Button type="primary" shade="product-red">
              {"Reach us out"}
            </Button>
            <Link
              href="https://twitter.com/hekorscommunity"
              target="_blank"
              rel="noreferrer"
            >
              <Button type="secondary" shade="product-blue">
                {"Follow us on Twitter"}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default OrganizeWithUs;
