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
        <div className="announcement-content">
          <span className="text-xs flex flex-row items-center justify-start gap-1 max-sm:flex-col">
            {"Build your community with US."}
            <span className="max-sm:mb-1">
              {" "}
              <Link
                href=""
                target="_blank"
                className="underline"
              >
                {"🎒 Build Program"}
              </Link>
            </span>
          </span>
        </div>
      </AnnouncementBar>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </React.Fragment>
  );
};

export default App;
