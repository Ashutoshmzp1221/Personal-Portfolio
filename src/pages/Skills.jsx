import React, { useEffect, useState } from "react";
import "../CSS/Skills.css";

import Pic1 from "../assests/images/images.jpg";
import Pic2 from "../assests/images/CSS3_logo.svg.png";
import Pic3 from "../assests/images/JavaScript-logo.png";
import Pic5 from "../assests/images/C.png";
import Pic6 from "../assests/images/java.webp";
import Pic7 from "../assests/images/python.png";
import Pic8 from "../assests/images/sql-img-removebg.png";
import Pic9 from "../assests/images/monogo.png";
import Pic11 from "../assests/images/linux.png";
import Pic12 from "../assests/images/git.png";
import Pic13 from "../assests/images/cc-removebg-preview.png";
import Pic15 from "../assests/images/express-js.png";
import Pic16 from "../assests/images/node.png";
import Ts from "../assests/images/ts.png";
import aws from "../assests/images/Aws.png";
import api from "../assests/images/api.webp";

const skillCategories = [
  {
    category: "Languages",
    skills: [
      { 
        name: "JavaScript", 
        imgSrc: Pic3, 
        level: 85, 
        note: "Web scripting" 
      },
      {
        name: "Python",
        imgSrc: Pic7,
        level: 75,
        note: "Scripting & automation",
      },
      { 
        name: "C++", 
        imgSrc: Pic5, 
        level: 90, 
        note: "Strong foundation" 
      },
      {
        name: "TypeScript",
        imgSrc: Ts,
        level: 60,
        note: "Static typing in JS",
      },
      {
        name: "Java",
        imgSrc: Pic6,
        level: 55,
        note: "OOP & backend familiarity",
      },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "HTML", imgSrc: Pic1, level: 90, note: "2+ years, used daily" },
      {
        name: "CSS",
        imgSrc: Pic2,
        level: 85,
        note: "Good design & layout skills",
      },
    ],
  },
  {
    category: "Backend / Frameworks",
    skills: [
      { name: "Node.js", imgSrc: Pic16, level: 95, note: "Server-side JS" },
      {
        name: "Express.js",
        imgSrc: Pic15,
        level: 95,
        note: "Backend routing & APIs",
      },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "SQL", 
        imgSrc: Pic8, 
        level: 85, 
        note: "DBMS, joins & queries" 
      },
      {
        name: "MongoDB",
        imgSrc: Pic9,
        level: 85,
        note: "Used in twitter backend project",
      },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { 
        name: "Git", 
        imgSrc: Pic12, 
        level: 90, 
        note: "Daily version control" 
      },
      { 
        name: "Linux", 
        imgSrc: Pic11, 
        level: 60, 
        note: "Command line basics" 
      },
      { 
        name: "AWS", 
        imgSrc: aws, 
        level: 65, 
        note: "EC2, S3 basic usage" 
      },
      { 
        name: "Docker", 
        imgSrc: Pic12, 
        level: 70, 
        note: "Containerization" 
      },
      {
        name: "Cloud Computing",
        imgSrc: Pic13,
        level: 65,
        note: "Basics of cloud services",
      },
      {
        name: "REST API",
        imgSrc: api,
        level: 80,
        note: "Integration & design",
      },
    ],
  },
];

export default function Skills() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="skills-section">
      <h2 className="skills-title">
        <span className="text-gray-500">{`//`}</span> Skills & Technologies
      </h2>
      {skillCategories.map((group, groupIndex) => (
        <div key={group.category} className="category-section">
          <h3 className="category-title">{group.category}</h3>
          <div className="skills-grid">
            {group.skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`skill-item ${loaded ? "skill-item-animate" : ""}`}
                style={{ animationDelay: `${(groupIndex + index) * 0.1}s` }}
                title={skill.name}
              >
                <div className="skill-header">
                  <img
                    src={skill.imgSrc}
                    alt={skill.name}
                    className="skill-icon"
                    loading="lazy"
                    draggable={false}
                  />
                  <span className="skill-name">{skill.name}</span>
                </div>
                <div className="skill-note">{skill.note}</div>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
