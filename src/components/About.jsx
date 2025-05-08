import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-gray-800 py-16 px-6 text-center text-white">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-gray-300 max-w-3xl mx-auto mb-6">
        I'm a Cloud Engineer and DevOps Automation Specialist with a passion for building scalable infrastructure and 
        streamlining deployment processes. My professional journey includes experience in Azure DevOps, CI/CD pipelines, 
        and cloud-native solutions. I enjoy solving complex problems with automation and delivering reliable software 
        through modern DevOps practices. Currently pursuing my Master's in Computer Science at Illinois Institute of 
        Technology, I'm focused on leveraging my skills in real-world projects that emphasize performance, security, and scalability.
      </p>
      <a
        href="https://drive.google.com/file/d/1-Phpafvofouao0k2nqf8kglzE-sjTHOy/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        Resume
      </a>
    </section>
  );
};

export default About;