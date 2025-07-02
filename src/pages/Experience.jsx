import React, { useEffect, useState } from "react";

const experiences = [
  {
    functionCall: "deployFlyTEX();",
    role: "Backend Booking System",
    duration: "Personal Project · Jan 2024 – Mar 2024",
    lines: [
      "const backendWork = [",
      "  'Engineered a microservice-based flight booking system using Node.js & Express.js',",
      "  'Integrated Sequelize ORM with MySQL and containerized services using Docker',",
      "  'Implemented advanced filters (price, airline, duration) with pagination',",
      "  'Used RabbitMQ for async price alert workflows and notifications',",
      "  'Connected email service for real-time ticket confirmation & alerts'",
      "];",
      "handleBookingPlatform(backendWork);",
    ],
  },
  {
    functionCall: "buildTwitterAPI();",
    role: "Social Platform Backend",
    duration: "Personal Project · Dec 2023 – Jan 2024",
    lines: [
      "const apiDevelopment = [",
      "  'Built REST APIs for tweets, comments, likes, and follow systems',",
      "  'Enabled nested commenting, hashtag parsing, and user profiles',",
      "  'Implemented feed personalization based on following graph',",
      "  'Secured routes with Passport.js and MongoDB token-based auth'",
      "];",
      "createEngagementPlatform(apiDevelopment);",
    ],
  },
  {
    functionCall: "launchLiveLine();",
    role: "Real-time Chat Application",
    duration: "Personal Project · Oct 2023 – Nov 2023",
    lines: [
      "const realtimeExperience = [",
      "  'Developed a chat server with Socket.IO & Express.js for real-time messaging',",
      "  'Ensured delivery persistence using MongoDB',",
      "  'Enabled event-based broadcasting and room-based conversations',",
      "  'Built efficient message flow for multi-user scalability'",
      "];",
      "goLive(realtimeExperience);",
    ],
  },
];

export default function Experience() {
  const [renderedItems, setRenderedItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typedCommand, setTypedCommand] = useState("");

  useEffect(() => {
    if (currentIndex >= experiences.length) return;

    const exp = experiences[currentIndex];
    let i = 0;

    const typing = setInterval(() => {
      if (i <= exp.functionCall.length) {
        setTypedCommand(exp.functionCall.slice(0, i));
        i++;
      } else {
        clearInterval(typing);
        setTimeout(() => {
          setRenderedItems((prev) => [
            ...prev,
            { ...exp, show: true, typed: exp.functionCall },
          ]);
          setTypedCommand("");
          setCurrentIndex((prev) => prev + 1);
        }, 800);
      }
    }, 60);

    return () => clearInterval(typing);
  }, [currentIndex]);

  return (
    <div className="text-white font-mono text-sm px-4 md:px-8 py-6 bg-[#1e1e1e] rounded-xl shadow-lg border border-[#2c2c2c]">
      <h2 className="text-xl font-bold mb-6 text-gray-400">
        <span className="text-gray-500">{`//`}</span> Hands-on Experience
      </h2>

      {typedCommand && (
        <div className="text-blue-400 text-lg mb-4 pl-1">
          <span className="text-green-400">&gt;</span> {typedCommand}
          <span className="blinking-cursor">|</span>
        </div>
      )}

      {renderedItems.map((item, idx) => (
        <div
          key={idx}
          className="mb-6 bg-[#111] rounded-lg border border-[#333] shadow-inner px-4 py-3"
        >
          <div className="text-blue-400 text-md mb-2">
            <span className="text-green-400">&gt;</span> {item.typed}
          </div>
          <div className="ml-4 border-l-2 border-blue-500 pl-4">
            <div className="text-gray-300">{item.role}</div>
            <div className="text-blue-800 text-xs mb-2">{item.duration}</div>
            <pre className="whitespace-pre-wrap leading-relaxed text-[13px] font-mono">
              {item.lines.map((line, i) => {
                if (line.includes("const")) {
                  return (
                    <div key={i}>
                      <span className="text-pink-500">const</span>{" "}
                      <span className="text-yellow-500">
                        {line.split("const ")[1].split(" =")[0]}
                      </span>{" "}
                      = <span className="text-gray-300">[</span>
                    </div>
                  );
                } else if (line.startsWith("]") || line === "];") {
                  return (
                    <div key={i} className="text-gray-300">
                      {line}
                    </div>
                  );
                } else if (line.includes("(") && line.includes(");")) {
                  return (
                    <div key={i}>
                      <span className="text-cyan-400">
                        {line.split("(")[0]}
                      </span>
                      <span className="text-white">(</span>
                      <span className="text-white">
                        {line.split("(")[1].replace(");", "")}
                      </span>
                      <span className="text-white">);</span>
                    </div>
                  );
                } else {
                  return (
                    <div key={i} className="text-green-400">
                      {line}
                    </div>
                  );
                }
              })}
            </pre>
          </div>
        </div>
      ))}
    </div>
  );
}
