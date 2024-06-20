import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
} from "react-icons/fa";

const sections = [
  {
    title: "Solutions",
    items: ["Marketing", "Analytics", "Commerce", "Data", "Cloud"],
  },
  {
    title: "Support",
    items: ["Pricing", "Documentation", "Guides", "API Status"],
  },
  {
    title: "Company",
    items: ["About", "Blog", "Jobs", "Press", "Partners"],
  },
  {
    title: "Legal",
    items: ["Claims", "Privacy", "Terms", "Policies", "Conditions"],
  },
];

const items = [
  { name: "Facebook", icon: FaFacebook, link: "https://www.facebook.com/" },
  { name: "Instagram", icon: FaInstagram, link: "https://www.instagram.com/" },
  { name: "Twitter", icon: FaTwitter, link: "https://twitter.com/" },
  { name: "Twitch", icon: FaTwitch, link: "https://www.twitch.tv/" },
  { name: "Github", icon: FaGithub, link: "https://github.com/" },
];

const Footer = (props) => {
  const {theme}=props;
  const themeClass = theme === "dark" ? "bg-black text-white" : "bg-gray-100 text-gray-800";
  const borderClass = theme === "dark" ? "border-gray-600" : "border-gray-300";
  const hoverClass = theme === "dark" ? "hover:text-white" : "hover:text-gray-600";
  return (
    <div className={`w-full ${themeClass} py-y px-2`}>
      <div className={`max-w-[1240px]  mx-auto grid grid-cols-2 md:grid-cols-6 ${borderClass} py-8`}>
        {sections.map((section, index) => (
          <div key={index}>
            <h6 className="font-bold uppercase pt-2 mt-20">{section.title}</h6>
            <ul>
              {section.items.map((item, i) => (
                <li key={i} className={`py-1 ${hoverClass}`}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="col-span-2 pt-8 md:pt-2 mt-20">
          <p className="font-bold uppercase">Subscribe to our newsletter</p>
          <p className="py-4">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <form className="flex flex-col sm:flex-row">
            <input
              className="w-full p-2 mr-4 rounded-md mb-4"
              type="email"
              placeholder="Enter email.."
            />
            <button className="p-2 mb-4">Subscribe</button>
          </form>
        </div>
      </div>

      <div className={`flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center ${themeClass}`}>
        <p className="py-4">2024. All rights reserved</p>
        <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
          {items.map((x, index) => {
            return <x.icon key={index} className={hoverClass} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
