import React from 'react';

const skills = [
  "Azure DevOps",
  "GitHub Actions",
  "Jenkins",
  "ARM Templates",
  "Azure Monitor",
  "CI/CD",
  "Bash",
  "PowerShell",
  "SQL Server",
  "Cosmos DB",
  "Azure CLI"
];

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-100 text-gray-900 py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg py-3 px-4 hover:bg-blue-50 transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;