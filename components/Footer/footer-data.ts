// Types Imports
import { FooterOptionType, SocialLinkType } from "@/types/footer-option-type";

const communityLinks: Array<FooterOptionType> = [
  { title: "Contact Us", link: "https://github.com/ooye-sanket" },
  { title: "Organize with LocalHub", link: "https://github.com/ooye-sanket/.github" },
  {
    title: "Community Guidelines",
    link: "https://github.com/ooye-sanket/.github/blob/master/CODE_OF_CONDUCT.md",
  },
  {
    title: "Join Team",
    link: "https://github.com/ooye-sanket/.github/tree/master/profile",
  },
  {
    title: "Community Gallery",
    link: "https://drive.google.com/drive/folders/1gR_6eD7SiPNjSc79Aykg0m8gnKcsP0rp?usp=share_link",
  },
];

const directLinks: Array<FooterOptionType> = [
  { title: "Hackathons", path: "" },
  {
    title: "Open Source",
    link: "https://github.com/ooye-sanket/.github/blob/master/open-source/README.md",
  },
  { title: "MLH.io", link: "https://mlh.io" },
  { title: "Offline Meetups", path: "" },
  {
    title: "Avengers at LocalHub",
    link: "https://github.com/oye-sanket",
  },
];

const socialLinks: Array<SocialLinkType> = [

  {
    iconPath: "discord-icon.svg",
    label: "discord",
    link: "https://discord.gg/eqYJgB8A57",
  },
  {
    iconPath: "twitter-icon.svg",
    label: "twitter",
    link: "https://twitter.com/ooye_sanket",
  },
 
];

export { communityLinks, directLinks, socialLinks };
