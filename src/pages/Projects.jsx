import React from "react";
import flyTexImg from "../assests/images/flyTexImg.png";
import twitterImg from "../assests/images/twitterImg.png";
import liveLineImg from "../assests/images/liveLineImg.png";
import hotelImg from "../assests/images/hotelImg.png";
import tourImg from "../assests/images/tourImg.jpg";
import educationManagementImg from "../assests/images/educationmanagement.jpeg";

const projects = [
  {
    title: "FlyTEX - Airline Booking Backend API",
    description:
      "Built a scalable backend for an airline booking platform enabling search, filter, and booking of flights. Includes advanced filtering (price, time, airline), pagination, real-time email updates, and microservices using Sequelize, MySQL, and Docker.",
    tech: ["Node.js", "Express.js", "MySQL", "Sequelize ORM", "Docker", "RabbitMQ"],
    link: "https://github.com/ashutoshmzp1221",
    image: flyTexImg,
  },
  {
    title: "Twitter Backend API Clone",
    description:
      "Designed a full-featured Twitter-like backend with posts (250-char limit), image uploads, hashtags, nested comments, likes, and follower-based feeds. Secured using Passport.js with user profile support and MongoDB.",
    tech: ["Node.js", "Express.js", "MongoDB", "Passport.js"],
    link: "https://github.com/Ashutoshmzp1221/Twitter",
    image: twitterImg,
  },
  {
    title: "LiveLine - Real-time Chat App",
    description:
      "Developed a real-time chat app using WebSockets (Socket.IO) for bi-directional communication. Messages are persisted in MongoDB, and real-time broadcasts ensure seamless communication between clients.",
    tech: ["Node.js", "Express.js", "Socket.IO", "MongoDB"],
    link: "https://github.com/Ashutoshmzp1221/LiveLine",
    image: liveLineImg,
  },
  {
    title: "Hotel Management System",
    description:
      "A desktop application developed using Java Applet and Swing that facilitates hotel operations including room booking, customer check-in/check-out, billing, and room availability tracking through an intuitive GUI.",
    tech: ["Java", "Swing", "Applet"],
    link: "https://github.com/Ashutoshmzp1221/Hotel_Management_System",
    image: hotelImg,
  },
  {
    title: "Tour Booking Web App",
    description:
      "A dynamic tour management website built with HTML, CSS, JavaScript, and PHP that allows users to explore travel destinations, book tours, submit inquiries, and receive confirmations. Backend integration handles form submissions and dynamic content rendering.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    link: "https://github.com/Ashutoshmzp1221/Tour-Project",
    image: tourImg,
  },
  {
    title: "Education Admin Management",
    description:
      "A school automation system to manage timetables, grades, assignments, announcements, and parent/student portals in real-time.",
    tech: ["React.js", "Node.js", "MongoDB"],
    image: educationManagementImg,
  },
];

export default function Projects() {
  return (
    <section className="text-white font-mono text-sm max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-base font-bold text-gray-500 mb-6">
        <span className="text-gray-500">{`//`}</span> Projects
      </h2>

      <div className="space-y-8">
        {projects.map((project, i) => (
          <div
            key={i}
            className="rounded-lg overflow-hidden shadow-md bg-[#1e1e1e] border border-[#2c2c2c]"
          >
            {/* VS Code-like Tab */}
            <div className="bg-[#2d2d2d] text-xs flex justify-between items-center px-4 py-2 border-b border-gray-700">
              <span className="text-green-400">
                {project.title.toLowerCase().replace(/\s+/g, "_")}.js
              </span>
              <span className="text-red-400 hover:text-red-300 cursor-pointer">
                ×
              </span>
            </div>

            {/* Code Section */}
            <div className="flex px-4 py-4">
              <div className="pr-4 text-gray-600 text-right select-none">
                <code className="leading-6 block">
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <div key={n}>{n}</div>
                  ))}
                </code>
              </div>

              <div className="flex-1 text-gray-300">
                <code className="leading-6 block whitespace-pre-wrap text-sm">
                  {`/**\n * Title: ${project.title}\n * Description: ${
                    project.description
                  }\n * Tech Stack: ${project.tech.join(", ")}\n */`}
                </code>

                {/* Project image */}
                {project.image && (
                  <div className="mt-4 w-full max-w-xs rounded border border-gray-700 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-32 hover:scale-[1.03] transition duration-200 ease-in-out"
                    />
                  </div>
                )}

                {/* GitHub link */}
                {project.link && (
                  <div className="mt-4">
                    <code className="text-green-400">
                      return{" "}
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        "View on GitHub"
                      </a>
                      ;
                    </code>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
