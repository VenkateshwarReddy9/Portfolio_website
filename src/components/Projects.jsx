import React from 'react';

const projects = [
  {
    title: "Tokyo Olympics Azure Data Engineering",
    description: "Built an ETL pipeline using Azure Data Factory, Blob Storage, and Azure SQL to process over 10 GB of real-time Olympics data. Enabled Power BI dashboards for real-time visualization.",
    tech: ["Azure Data Factory", "Blob Storage", "SQL", "Power BI"]
  },
  {
    title: "Classroom Attendance Management System",
    description: "Web app with role-based access for managing classroom attendance using Python (Flask), MySQL, and GitHub Actions CI/CD. Designed for future deployment on Azure App Service.",
    tech: ["Flask", "MySQL", "GitHub Actions", "Azure"]
  },
  {
    title: "Infrastructure as Code for Azure Microservices",
    description: "Automated deployment of microservices on Azure Kubernetes Service using Bicep templates and GitHub Actions for CI/CD. Configured monitoring and alerting with Azure Monitor.",
    tech: ["Bicep", "AKS", "GitHub Actions", "Azure Monitor"]
  },
  {
    title: "Serverless Image Processing Pipeline",
    description: "Designed a scalable image processing workflow using Azure Functions and Event Grid, with output stored in Blob Storage. CI/CD implemented using Azure DevOps pipelines.",
    tech: ["Azure Functions", "Event Grid", "Blob Storage", "Azure DevOps"]
  },
  {
    title: "DevOps Monitoring Dashboard",
    description: "Built a custom monitoring dashboard with real-time logs and metrics aggregated from Azure Log Analytics and Application Insights. Integrated alerting and incident response workflows.",
    tech: ["Log Analytics", "App Insights", "Power BI", "CI/CD"]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="bg-white text-gray-900 py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md text-left">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="mb-2 text-sm text-gray-700">{project.description}</p>
            <div className="text-xs text-gray-600 italic">{project.tech.join(", ")}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;