import React from "react";
import "./Footer.css";
export default function Footer() {
  const links = [
    {
      name: "cv",
      link: "https://drive.google.com/file/d/1k82H1lBN9q9B7YV8bTO2XcH09OcJsFaa/view?usp=sharing",
    },
    {
      name: "linkedin",
      link: "https://www.linkedin.com/in/ansh-godha-a61936172/",
    },
    {
      name: "instagram",
      link: "https://www.instagram.com/anshgodha/",
    },
    {
      name: "mail",
      link: "mailto:anshgodha714@gmail.com",
    },
  ];
  return (
    <div>
      {links.map((info, index) => (
        <a href={info.link} target="_blank" rel="noopener noreferrer">
          <img
            className="footer-logo"
            src={require(`../assets/contact-logos/${info.name}.png`)}
            key={index}
            alt={info.name}
          />
        </a>
      ))}
    </div>
  );
}
