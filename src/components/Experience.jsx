import React from 'react';

const experiences = [
  {
    role: "Software Engineer",
    company: "ValueMomentum Software Services",
    period: "Jun 2021 - Jun 2022",
    location: "Hyderabad, India",
    bullets: [
      "Developed and maintained deployment pipelines using Azure DevOps to support rapid feature delivery for insurance products.",
      "Collaborated with cross-functional teams to transition key services to a scalable, cloud-native infrastructure on Microsoft Azure.",
      "Instrumented application performance metrics and logs using Azure Monitor and Log Analytics, enhancing visibility and response time.",
      "Contributed to system stability by implementing automated rollback strategies and infrastructure version control with Git.",
      "Played a key role in Agile ceremonies, driving sprint planning and iterative delivery with a focus on continuous improvement."
    ],
    tech: ["Azure DevOps", "Microsoft Azure", "CI/CD", "Azure Monitor", "Git", ".NET Core"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="bg-gray-800 text-white py-16 px-6">
      <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
      <div className="max-w-4xl mx-auto space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-gray-700 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">{exp.role} @ {exp.company}</h3>
            <p className="text-sm text-gray-300 italic mb-1">{exp.period} | {exp.location}</p>
            <ul className="list-disc list-inside text-sm text-gray-200 space-y-1">
              {exp.bullets.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <div className="mt-2 text-xs text-gray-400 italic">Technologies: {exp.tech.join(", ")}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;