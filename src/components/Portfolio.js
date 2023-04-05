import React from "react";
import Project from "./Project";

function Portfolio() {
  return (
    <div className="flex-container">
      <section class="portfolio">
        <h2>Thomas' Chess Blog</h2>
        <Project
          title="Thomas' Chess Blog"
          imageSrc="path/to/image.gif"
          deployedLink="https://thomas-model-view-controller.herokuapp.com/"
          repoLink="https://github.com/ThomasCalle/Thomas-Model-View-Controller-MVC-Tech-Blog"
        />
      </section>
      <section id="portfolio">
        <h2>Stack Dev Portfolio</h2>
        <Project
          title="Stack Dev Portfolio"
          imageSrc="path/to/image.gif"
          deployedLink="https://thomascalle.github.io/ThomasCalleStackDevPortfolio/"
          repoLink="https://github.com/ThomasCalle/ThomasCalleStackDevPortfolio"
        />
      </section>
      <section id="portfolio">
        <h2>Online Workday Planner</h2>
        <Project
          title="Online Workday Planner"
          imageSrc="path/to/image.gif"
          deployedLink="https://thomascalle.github.io/Online-Workday-Planner/"
          repoLink="https://github.com/ThomasCalle/Online-Workday-Planner"
        />
      </section>
      <section id="portfolio">
        <h2>Object Oriented Programming SVG Logo Maker</h2>
        <Project
          title="Object Oriented Programming SVG Logo Maker"
          imageSrc="path/to/image.gif"
          deployedLink="https://github.com/ThomasCalle/Thomas-Object-Oriented-Programming-SVG-Logo-Maker"
          repoLink="https://github.com/ThomasCalle/Thomas-Object-Oriented-Programming-SVG-Logo-Maker"
        />
      </section>
      <section id="portfolio">
        <h2>10 Things to Do in Toronto</h2>
        <Project
          title="10 Things to Do in Toronto"
          imageSrc="path/to/image.gif"
          deployedLink="https://thomascalle.github.io/10-Things-To-Do-In-Toronto/"
          repoLink="https://github.com/ThomasCalle/10-Things-To-Do-In-Toronto#links"
        />
        </section>
        <section id="portfolio">
        <h2>Toronto Weather Dashboard</h2>
        <Project
          title="Toronto Weather Dashboard"
          imageSrc="path/to/image.gif"
          deployedLink="https://thomascalle.github.io/Thomas-Weather-Dashboard/"
          repoLink="https://github.com/ThomasCalle/Thomas-Weather-Dashboard"
        />
        </section>
    </div>
  );
}

export default Portfolio;