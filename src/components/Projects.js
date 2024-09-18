import React from 'react';

function Projects() {
  const projectList = [
    { name: 'Project 1', description: 'A cool project...', link: 'https://github.com/project1' },
    { name: 'Project 2', description: 'Another awesome project...', link: 'https://github.com/project2' },
    // Add more projects here
  ];

  return (
    <section id="projects" style={{ padding: '50px' }}>
      <h2>Projects</h2>
      <ul>
        {projectList.map((project, index) => (
          <li key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
