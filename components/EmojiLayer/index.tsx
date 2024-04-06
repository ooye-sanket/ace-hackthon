// Basic Imports
import React, { useState } from "react";
import { useRef } from "react";
import Image from "next/image";

// Components Imports
import EmojiLayerData from "./emoji-list-data.json";
import { Tooltip } from 'react-tooltip'

// Types Imports
import { EmojiType } from "@/types/emoji-type";
import ModalView from "@/components/ui-patterns/ModalView";
import Link from "next/link";

const EmojiLayer: React.FunctionComponent<EmojiType> = () => {
  const emojiLayerRef = useRef<Array<EmojiType>>(EmojiLayerData);
  const [highlitablePopupView, setHighlightablePopupView] = useState(false);

  return (
    <React.Fragment>
      <div className="emoji-layer flex flex-row items-center justify-between select-none max-sm:grid max-sm: max-sm:grid-cols-4 max-sm:mx-4 max-sm:justify-items-center">
        {emojiLayerRef.current?.map((emoji: EmojiType, emojiIndex: number) => (
            <React.Fragment key={emojiIndex}>
              {emoji?.isActive
                ? <React.Fragment>
                    <button
                      className="w-fit h-fit focus:outline-none"
                      id={`highlitable-tooltip__${emoji?.name}`}
                      data-tooltip-content="🎒 Build Program is now live"
                      onClick={() => setHighlightablePopupView(true)}
                    >
                      <Image
                        src={`/emojis/${emoji?.imageName}`}
                        width="120"
                        height="120"
                        key={emojiIndex}
                        alt={emoji?.name}
                        className={`hover:scale-105 transition-all  ${emoji?.isHighlighted && "hover:brightness-90 animate-bounce transition-all"}`}
                        priority
                      />
                      <Tooltip anchorId={`hightable-tooltip__${emoji?.name}`} />
                    </button>
                    <ModalView isOpen={highlitablePopupView} modalViewAction={setHighlightablePopupView}>
                      <h1 className="leading-snug text-lg font-semibold">{"🎒 Build Program is now live"}</h1>
                      <p className="leading-6  text-gray-500 font-medium text-sm mt-4 w-[42ch]">
                        {"The Build Program by localhub is now live. The Program will be running for next 1.5 months"}
                      </p>
                      <div className="my-6 flex flex-col items-start justify-start gap-3">
                        <Link
                          href="https://localhub.vercel.app/"
                          target={"_blank"}
                          className="underline font-medium text-product-blue"
                        >
                          {"→ Visit Build Program website"}
                        </Link>
                      </div>
                    </ModalView>
                  </React.Fragment>
                : <Image
                    src={`/emojis/${emoji?.imageName}`}
                    width="120"
                    height="120"
                    key={emojiIndex}
                    alt={emoji?.name}
                    className={`hover:scale-105 transition-all max-sm:w-[70px] ${emoji?.isHighlighted && "animate-bounce transition-transform"}`}
                    priority
                  />
              }
            </React.Fragment>
        ))}
      </div>
    </React.Fragment>
  );
};

export default EmojiLayer;
