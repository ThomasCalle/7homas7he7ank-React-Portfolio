import React from "react";
import Project from "./Project";
import Weather from "../images/Weather.GIF";

function Portfolio() {
  return (
    <div className="flex-container">
      <section className="portfolio">
        <h2>Thomas' Chess Blog</h2>
        <Project
          title="Thomas' Chess Blog"
          imageSrc={`${process.env.PUBLIC_URL}/ThomasChessBlog.GIF`}
          deployedLink="https://thomas-model-view-controller.herokuapp.com/"
          repoLink="https://github.com/ThomasCalle/Thomas-Model-View-Controller-MVC-Tech-Blog"
        />
      </section>
      <section className="portfolio">
        <h2>Stack Dev Portfolio</h2>
        <Project
          title="Stack Dev Portfolio"
          imageSrc="/."
          deployedLink="https://thomascalle.github.io/ThomasCalleStackDevPortfolio/"
          repoLink="https://github.com/ThomasCalle/ThomasCalleStackDevPortfolio"
        />
      </section>
      <section className="portfolio">
        <h2>Online Workday Planner</h2>
        <Project
          title="Online Workday Planner"
          imageSrc="/WorkDayPlanner.GIF"
          deployedLink="https://thomascalle.github.io/Online-Workday-Planner/"
          repoLink="https://github.com/ThomasCalle/Online-Workday-Planner"
        />
      </section>
      <section className="portfolio">
        <h2>SQL: Employee Tracker</h2>
        <Project
          title="SQL: Employee Tracker"
          imageSrc="/SQL_Employee_Tracker.gif"
          deployedLink="https://github.com/ThomasCalle/Thomas-SQL-Employee-Tracker"
          repoLink="https://github.com/ThomasCalle/Thomas-SQL-Employee-Tracker"
        />
      </section>
      <section className="portfolio">
        <h2>10 Things to Do in Toronto</h2>
        <Project
          title="10 Things to Do in Toronto"
          imageSrc="10ThingsToDoInToronto.png"
          deployedLink="https://thomascalle.github.io/10-Things-To-Do-In-Toronto/"
          repoLink="https://github.com/ThomasCalle/10-Things-To-Do-In-Toronto#links"
        />
      </section>
      <section className="portfolio">
        <h2>Toronto Weather Dashboard</h2>
        <Project
          title="Toronto Weather Dashboard"
          imgSrc={Weather}
          deployedLink="https://thomascalle.github.io/Thomas-Weather-Dashboard/"
          repoLink="https://github.com/ThomasCalle/Thomas-Weather-Dashboard"
        />
      </section>
    </div>
  );
}

export default Portfolio;
