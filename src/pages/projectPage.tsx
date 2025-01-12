import React from "react";
import ProjectCard from "../components/projectCard";

function ProjectPage() {
  return (
    <>
      <div className="line"></div>
      <div id="project">
        <div className="container" id="projHead">
          <div className="width-50">
            <h1>FEATURED PROJECTS</h1>
            <p>
              Here are some Of the selected projects that showcase my passion
              for front-end development.
            </p>
          </div>
        </div>
        <ProjectCard
          title="Promotional landing page for our favorite show"
          desc="
              Teamed up with a designer to breathe life into a promotional
              webpage for our beloved show, Adventure Time. Delivered a fully
              responsive design with dynamic content capabilities, seamlessly
              integrating a newsletter feature to keep fans updated with the
              latest adventures."
        />
        <ProjectCard
          title="Blog site for World News"
          desc="Mastered CSS Grid complexities in building an innovative news
homepage, navigating intricate design decisions for a seamless user
experience. Leveraged the challenge to enhance skills in front-end
development."
        />
        {/* <ProjectCard title="" desc="" /> */}
        <ProjectCard
          title="E-commerce product page"
          desc="Successfully crafted an engaging product page featuring a dynamic
lightbox gallery and seamless cart functionality, showcasing
proficiency in JavaScript development."
        />
      </div>
    </>
  );
}

export default ProjectPage;
