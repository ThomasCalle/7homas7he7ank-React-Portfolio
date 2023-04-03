import React from 'react';

function Project(props) {
  return (
    <div className="card">
      <a href={props.deployedLink} target="_blank" rel="noreferrer">
        <img
          src={props.imgSrc}
          className="card-img-top"
          alt={props.imgAlt}
        />
      </a>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <a
          href={props.deployedLink}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary"
        >
          Deployed App
        </a>
        <a
          href={props.githubLink}
          target="_blank"
          rel="noreferrer"
          className="btn btn-secondary"
        >
          GitHub Repo
        </a>
      </div>
    </div>
  );
}

export default Project;
