import React from "react";
import "../CSS/AchivCer.css";

export default function AchievementCertifacte() {
  const certifications = [
    {
      title: "Developing Backend Apps using Express and NodeJs",
      issuer: "IBM(Coursera)",
      year: "2024",
    },
    {
      title: "JavaScript Programming Essentials",
      issuer: "IBM(Coursera)",
      year: "2024",
    },
    {
      title: "Internet of Things",
      issuer: "Indian Institute of Technology Kharagpur(NPTEL)",
      year: "2023",
    },
    {
      title: "Probability and Statistics",
      issuer: "Indian Institute of Technology Kharagpur(NPTEL)",
      year: "2023",
    },
    {
      title: "Discrete Mathematics",
      issuer: "Indian Institute of Technology Madras(NPTEL)",
      year: "2022",
    },
  ];

  const awards = [
    {
      title: "Elite-Silver medal",
      description: "🥈 Discrete Mathematics",
    },
    {
      title: "Elite-Gold medal",
      description: "🏆 Introduction to Internet of Things",
    },
    {
      title: "Academic Excellence Award",
      description: "🎓 Honored for consistent academic performance during MCA (2024).",
    },
  ];

  return (
    <section className="text-white font-mono text-sm px-4">
      <h2 className="text-base font-bold text-gray-500 mb-6"><span className="text-gray-500">{`//`}</span>  Achievements & Certifications</h2>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Certifications */}
        <div>
          <h3 className="text-[#5a50f1] font-semibold mb-2">const certifications = [</h3>
          <div className="ml-6 text-[#DCDCAA] space-y-4">
            {certifications.map((cert, index) => (
              <div key={index} className="text-sm leading-relaxed">
                <span className="text-[#c23041]">title</span>: <span className="text-[#CE9178]">"{cert.title}"</span>,<br />
                <span className="text-[#c23041]">issuer</span>: <span className="text-[#CE9178]">"{cert.issuer}"</span>,<br />
                <span className="text-[#9CDCFE]">year</span>: <span className="text-[#CE9178]">"{cert.year}"</span>
              </div>
            ))}
          </div>
          <span className="text-[#4EC9B0] mt-1 block">]</span>
        </div>

        {/* Awards */}
        <div>
          <h3 className="text-[#5a50f1] font-semibold mb-2">const awards = [</h3>
          <div className="ml-6 text-[#DCDCAA] space-y-4">
            {awards.map((award, index) => (
              <div key={index} className="text-sm leading-relaxed">
                <span className="text-[#c23041]">title</span>: <span className="text-[#CE9178]">"{award.title}"</span>,<br />
                <span className="text-[#9CDCFE]">description</span>: <span className="text-[#CE9178]">"{award.description}"</span>
              </div>
            ))}
          </div>
          <span className="text-[#4EC9B0] mt-1 block">]</span>
        </div>
      </div>
    </section>
  );
}
