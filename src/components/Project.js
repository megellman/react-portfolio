import { NavLink } from "react-router-dom";
import { useHover } from "@uidotdev/usehooks";
import "../styles/App.css";

function ProjectCard({ item }) {
  const [ref, hovering] = useHover();

  return (
    <NavLink
      className="project-link"
      to={item.deployedLink ? item.deployedLink : item.repoLink}
      target="_blank"
    >
      <div
        ref={ref}
        className="card project-card border-0"
        style={{
          backgroundColor: hovering
            ? item.color
            : item.colorTransparent,
        }}
      >
        <div className="card-body d-flex justify-content-center align-items-center text-center">
          {hovering ? (
            <p className="card-text project-description">
              {item.description}
            </p>
          ) : (
            <h3 className="project-title">{item.name}</h3>
          )}
        </div>
      </div>
    </NavLink>
  );
}

export default function Project({ projects }) {
  return (
    <div className="container project-container">
      <div className="project-grid">
        {projects.map((item, i) => (
          <ProjectCard key={i} item={item} />
        ))}
      </div>
    </div>
  );
}