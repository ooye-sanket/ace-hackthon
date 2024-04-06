// Basic Imports
import React from "react";
import Link from "next/link";
import type { AppProps } from "next/app";

// Components Imports
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnnouncementBar from "@/components/AnnouncementBar";

// Styles Imports
import "@/styles/globals.css";
import 'react-tooltip/dist/react-tooltip.css'

const App: React.FunctionComponent<AppProps> = ({
  Component,
  pageProps,
}: AppProps) => {
  return (
    <React.Fragment>
      <AnnouncementBar>
        <div></div>
      </AnnouncementBar>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </React.Fragment>
  );
};

export default App;
