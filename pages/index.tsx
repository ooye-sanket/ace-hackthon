// Basic Imports
import React from "react";
import Link from "next/link";
import { NextPage } from "next";

// Components Imports
import Callout from "@/components/ui-patterns/Callout";
import EmojiLayer from "@/components/EmojiLayer";
import GetStarted from "@/components/GetStarted";
import HackathonCTA from "@/components/HackathonCTA";
import OrganizeWithUs from "@/components/OrganizeWithUs";
import Team from "@/components/Team";
import Button from "@/components/ui-patterns/Button";
import MetaHead from "@/components/MetaHead";

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <MetaHead title="LocalHub" description="public learn" />
      <div className="home max-sm:overflow-hidden">
        <main className="checks-container">
          <div className="hero-section-wrapper w-fit h-auto mx-auto flex flex-col items-center justify-between mb-16">
            <Callout>{"Our Mission"}</Callout>
            <h1 className="font-product-bungee text-7xl mt-6 flex flex-col items-center justify-between gap-4 max-sm:text-4xl">
              <span>{"Public Knowledge."}</span>
              <span>{"Collective Creation."}</span>
            </h1>
            <Link href="/events">
          <Button type="secondary">{"Attend an event"}</Button>
        </Link>



          </div>
          <EmojiLayer />
        </main>
        <GetStarted />
        <OrganizeWithUs />
        <Team />
        <HackathonCTA />
        {/* REMOVING COMMUNITY NARRATIVES SECTION UNTIL FURTHER UPDATES */}
        {/* <CommunityNarratives /> */}
      </div>
    </React.Fragment>
  );
};

export default Home;
