import React from 'react';
import Project from './Project';

function Portfolio() {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <Project
        title="Project Title"
        imageSrc="path/to/image.gif"
        deployedLink="https://example.com"
        repoLink="https://github.com/username/repo"
      />
      {/* Add 5 more <Project> components with different data */}
    </section>
  );
}

export default Portfolio;
