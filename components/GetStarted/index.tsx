// Basic Imports
import React from "react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// Component Imports
import GetStartedData from "./get-started-data.json";

// Types Imports
import { GetStartedItemType } from "@/types/get-started-item-type";

const GetStarted: React.FunctionComponent<GetStartedItemType> = () => {
  const getStartedRef = useRef<Array<GetStartedItemType>>(GetStartedData);

  return (
    <React.Fragment>
      <section className="get-started-section bg-product-brown py-24 my-12 max-sm:mt-0 max-sm:mb-2">
        <div className="get-started-content-wrapper wrapped-view max-sm:ml-4">
          <h3 className="get-started-title font-semibold tracking-wider text-sm uppercase text-white text-opacity-50 max-sm:text-center ">
            {"Get Started"}
          </h3>
          <h1 className="get-started-headline font-product-bungee mt-4 text-4xl flex flex-col items-start justify-start w-fit h-fit max-sm:text-center max-sm:text-3xl">
            <span className="text-white">
              {"A space to learn, build & grow"}
            </span>
            <span className="text-product-red max-sm:mx-auto">{"together."}</span>
          </h1>

          <div className="get-started-items-carousel-wrapper mt-12 flex flex-row items-start justify-start gap-12 overflow-x-scroll py-8 px-4 max-sm:flex-col max-sm:items-center max-sm:gap-24 max-sm:py-10 ">
            {getStartedRef.current?.map(
              (getStartedItem: GetStartedItemType, getStartedIndex: number) => (
                <GetStartedItem
                  key={getStartedIndex}
                  title={getStartedItem?.title}
                  bgColor={getStartedItem?.bgColor}
                  description={getStartedItem?.description}
                  hasNewTab={getStartedItem?.hasNewTab}
                  path={getStartedItem?.path}
                />
              )
            )}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

function GetStartedItem(
  {
    title,
    bgColor = "bg-white",
    description,
    path,
    hasNewTab,
  }: GetStartedItemType,
  props: any
) {
  const [backgroundColor, setBackgroundColor] = useState<string>(bgColor);
  const [cardTextColor, setCardTextColor] = useState<string>("text-black");

  useEffect(() => {
    switch (bgColor) {
      case "bg-product-red":
        setBackgroundColor("bg-product-red");
        break;
      case "bg-product-purple-light":
        setBackgroundColor("bg-product-purple-light");
        break;
      case "bg-product-purple-dark":
        setBackgroundColor("bg-product-purple-dark");
        break;
      case "bg-product-yellow":
        setBackgroundColor("bg-product-yellow");
        break;
      case "bg-product-pink":
        setBackgroundColor("bg-product-pink");
        break;
      case "bg-white":
        setBackgroundColor("bg-white");
        break;
      case "bg-product-blue":
        setBackgroundColor("bg-product-blue");
        break;
      case "bg-product-brown":
        setBackgroundColor("bg-product-brown");
        break;
    }
  }, [bgColor]);

  useEffect(() => {
    if (
      [
        "bg-product-red",
        "bg-product-purple-light",
        "bg-product-purple-dark",
        "bg-product-brown",
        "bg-product-pink",
      ].includes(backgroundColor)
    ) {
      setCardTextColor("text-white");
    }
  }, [backgroundColor]);

  return (
    <React.Fragment>
      <div className="get-started-item" {...props}>
        <Link href={path} target={hasNewTab ? "_blank" : "_self"}>
          <div
            className={`get-started-item__card-wrapper rounded-md flex flex-col 
                    items-start justify-end px-4 pb-6 w-[240px] h-[160px] shadow
                    hover:scale-105 transition-all cursor-pointer select-none max-sm:w-[300px] h-[220px] ${backgroundColor} ${cardTextColor}`}
          >
            <span className="get-started-item__title font-bold text-xl max-sm:text-2xl max-sm:flex max-sm:flex-col max-sm:w-[40%]">
              <span className="get-started-item__title-emoji">
                {title?.emoji}
              </span>
              <span className="get-started-item__title-text">
                {title?.text}
              </span>
            </span>
          </div>
        </Link>
        <div className="get-started-item__description mt-4 text-xs text-white text-left text-opacity-40 font-semibold tracking-wide w-[240px] leading-6 max-sm:mx-auto max-sm:w-[300px] max-sm:text-base ">
          {description}
        </div>
      </div>
    </React.Fragment>
  );
}

export default GetStarted;
