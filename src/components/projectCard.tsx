import React from "react";

function ProjectCard(props) {
  return (
    <>
      <div id="projCard" className="container">
        <div id="projImg" className="right">
          <img src="./public/assets/images/work.jpg" alt="Project Img" />
        </div>
        <div className="ProjText">
          <div className="ProjDesc">
            <h2>{props.title}</h2>
            <p>
              {props.desc}
            </p>
          </div>
          <div className="projInfo">
            <div>
              <h3>PROJECT INFO</h3>
              <h3></h3>
            </div>
            <div>
              <h3>Year</h3>
              <h3>2024</h3>
            </div>
            <div>
              <h3>Role</h3>
              <h3>Front-end Developer</h3>
            </div>
          </div>
          <div className="projLinks">
            <a href="#">
              <p>LIVE DEMO</p>
              <img src="./public/assets/images/arrow.png" alt="Project link" />
            </a>
            <a href="#">
              <p>SEE ON GITHUB</p>
              <img src="./public/assets/images/github.svg" alt="Project link" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
