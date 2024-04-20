import {
  
  discord,
  
  figma,

  framer,
  
  notion,
  photoshop,
  
  protopie,
  raindrop,
 

  slack,
  
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "#hero",
  },
  {
    id: "1",
    title: "About",
    url: "#about",
  }
];
export const hero = [
  {
    id: "0",
    text: "Artistry Meets",
    class: "font-thunder text-[7vw] uppercase tracking-wide mt-6 ml-15 hover:text-outline",
    transition: "fade-left",
    delay: 300,
  },
  {
    id: "1",
    text: "Metaverse",
    class: "font-thunder text-[7vw] uppercase tracking-wide text-right mr-15 mt-[18rem] md:mt-[28rem] xl:mt-[25rem]",
    transition: "fade-right",
    delay: 500,
  },
];

export const curlybtn = [
  {
    id: '0',
    text: "Like this work",
    onclick: "",
    href: ""
    
  }, 
  {
    id: '1',
    text: "Landing Page",
    onclick: "",
    href: ""
  }
]
export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];