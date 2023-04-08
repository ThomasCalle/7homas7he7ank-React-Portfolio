import React from "react";
import Project from "./Project";
import WorkDayPlanner from "../images/WorkDayPlanner.GIF";
import WebAPI from "../images/WebAPI_.GIF";
import Weather from "../images/Weather.GIF";
import ThomasChessBlog from "../images/ThomasChessBlog.GIF";
import StackDev from "../images/StackDev.JPEG";
import ThingsToDoInToronto from "../images/10ThingsToDoInToronto.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/Portfolio.css";

// Portfolio component
function Portfolio() {
  return (
        // Portfolio container
    <div className="portfolio-wrapper">
      <h1 className="portfolio-title">Portfolio</h1>
      <div className="container">
        <div className="row">
          {[
            {
              title: "Thomas' Chess Blog",
              description: "CMS-Style Model View Controller Blog",
              imgSrc: ThomasChessBlog,
              deployedLink:
                "https://thomas-model-view-controller.herokuapp.com/",
              githubLink:
                "https://github.com/ThomasCalle/Thomas-Model-View-Controller-MVC-Tech-Blog",
            },
            {
              title: "Stack Dev Portfolio",
              description: "Built On Advanced CSS",
              imgSrc: StackDev,
              deployedLink:
                "https://thomascalle.github.io/ThomasCalleStackDevPortfolio/",
              githubLink:
                "https://github.com/ThomasCalle/ThomasCalleStackDevPortfolio",
            },
            {
              title: "Online Workday Planner",
              description: "Third-Party API Sceduler ft. Day.js",
              imgSrc: WorkDayPlanner,
              deployedLink:
                "https://thomascalle.github.io/Online-Workday-Planner/",
              githubLink:
                "https://github.com/ThomasCalle/Online-Workday-Planner",
            },
            {
              title: "Java Script: WEB API Quiz",
              description: "Dynamically updated HTML & CSS Web API quiz game.",
              imgSrc: WebAPI,
              deployedLink:
                "https://thomascalle.github.io/JavaScript_Interview_Assessment/",
              githubLink:
                "https://github.com/ThomasCalle/JavaScript_Interview_Assessment",
            },
            {
              title: "10 Things to Do in Toronto",
              description: "Interactive Front-End Application Guide.",
              imgSrc: ThingsToDoInToronto,
              deployedLink:
                "https://thomascalle.github.io/10-Things-To-Do-In-Toronto/",
              githubLink:
                "https://github.com/ThomasCalle/10-Things-To-Do-In-Toronto#links",
            },
            {
              title: "Weather Dashboard",
              description: "Server-Side APIs: (5) Day Weather Dashboard.",
              imgSrc: Weather,
              deployedLink:
                "https://thomascalle.github.io/Thomas-Weather-Dashboard/",
              githubLink:
                "https://github.com/ThomasCalle/Thomas-Weather-Dashboard",
            },
          ].map((project, index) => (
            // Div container for each project
            <div className="col-12 col-md-6 col-lg-4 my-2" key={index}>
              {/* <h2>{project.title}</h2> */}
              <Project
                title={project.title}
                description={project.description}
                imgSrc={project.imgSrc}
                deployedLink={project.deployedLink}
                githubLink={project.githubLink}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
// Export Portfolio
export default Portfolio;
