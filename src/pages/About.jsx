import React, { useEffect, useState } from "react";
import AshutoshResume from "../assests/AshutoshResume.pdf";
import "../CSS/About.css";

export default function About() {
  const [activeLink, setActiveLink] = useState(-1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveLink((prev) => (prev + 1) % 5);
    }, 2000);
    return () => clearInterval(intervalId);
  }, []);

  const socialLinks = [
    {
      href: "https://github.com/Ashutoshmzp1221",
      icon: "fa-github",
      hoverClass: "hover-bg-black",
      ariaLabel: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/ashutosh-dwivedi-163259231/",
      icon: "fa-linkedin-in",
      hoverClass: "hover-bg-linkedin",
      ariaLabel: "LinkedIn",
    },
    {
      href: "",
      icon: "fa-instagram",
      hoverClass: "hover-bg-instagram",
      ariaLabel: "Instagram",
    },
    {
      href: "https://www.facebook.com/profile.php?id=61572294753247",
      icon: "fa-facebook",
      hoverClass: "hover-bg-facebook",
      ariaLabel: "Facebook",
    },
    {
      href: "",
      icon: "fa-twitter",
      hoverClass: "hover-bg-twitter",
      ariaLabel: "Twitter",
    },
  ];

  const getActiveClasses = (index) => {
    if (index === activeLink) {
      switch (index) {
        case 0:
          return "text-white border-white bg-black opacity-[0.8]";
        case 1:
          return "text-white border-white bg-[#0077b5] opacity-[0.8]";
        case 2:
          return "text-white border-white bg-gradient-to-br from-red-500 to-blue-500";
        case 3:
          return "text-white border-white bg-[#4267B2] opacity-[.8]";
        case 4:
          return "text-white border-2 border-white bg-[#1DA1F2] opacity-[.8]";
        default:
          return "";
      }
    }
    return "";
  };

  return (
    <div
      id="About"
      className="about-container"
      role="region"
      aria-label="About section"
    >
      <div className="about-content max-w-4xl mx-auto text-center px-6 py-12 select-text">
        <h1 className="main-title text-left text-green-400 text-xl md:text-2xl">
          <span className="text-gray-500">{`//`}</span> Hi, I'm{" "}
          <span className="text-blue-400">Ashutosh Dwivedi</span>
        </h1>

        <h2 className="text-left font-mono text-sm text-gray-400 mb-4">
          <span className="text-yellow-400">const</span> role{" "}
          <span className="text-white">=</span>{" "}
          <span className="text-pink-400">"Web Developer"</span>;
        </h2>

        <div className="bg-[#1e1e1e] border-l-4 border-blue-600 pl-4 py-2 text-sm text-gray-400 font-mono leading-relaxed text-left whitespace-pre-wrap">
          <p>
            {`/**
 * I'm a backend engineer with hands-on experience building scalable, maintainable systems using Node.js, Express, and modern databases like MySQL and MongoDB.
 * I design robust RESTful APIs, implement background processing with RabbitMQ and Redis, and follow clean architecture principles across services.
 * My projects include real-world implementations like file processing pipelines, social platforms, and microservices orchestrated with Docker.
 * I focus on writing production-ready code that’s efficient, secure, and easy to extend — balancing engineering precision with business goals.
 */`}
          </p>
        </div>

        <nav
          className="social-links mt-6 flex justify-center gap-5 text-4xl"
          aria-label="Social media links"
        >
          {socialLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.ariaLabel}
              className={`social-icon ${link.hoverClass} ${getActiveClasses(
                idx
              )}`}
              tabIndex={0}
            >
              <i className={`fa-brands ${link.icon}`} aria-hidden="true"></i>
            </a>
          ))}
        </nav>

        <div className="cv-download mt-6">
          <a
            href={AshutoshResume}
            download="AshutoshResume.pdf"
            className="cv-button inline-flex items-center font-medium px-4 py-2 rounded-lg transition-colors duration-200 select-none"
            aria-label="Download Resume PDF"
          >
            <i
              className="fa-solid fa-file-arrow-down mr-2"
              aria-hidden="true"
            ></i>
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
}
