import { useState, useEffect } from "react";
import { useHover } from "@uidotdev/usehooks";
import "../styles/App.css";

function ProjectCard({ item }) {
  const [ref, hovering] = useHover();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [flipped, setFlipped] = useState(false);

  // detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // explicit (not toggle) flip logic
  const handleFrontClick = () => {
    if (isMobile) {
      setFlipped(true);
    }
  };

  const handleBackClick = () => {
    if (isMobile) {
      setFlipped(false);
    }
  };

  const link = item.deployedLink || item.repoLink;

  return (
    <div className={`project-card-wrapper ${flipped ? "flipped" : ""}`}>
      <div className="project-card-inner">

        {/* FRONT */}
        <div
          ref={ref}
          className="project-card project-card-front card border-0 d-flex justify-content-center align-items-center text-center"
          onClick={handleFrontClick}
          style={{
            backgroundColor:
              !isMobile && hovering
                ? item.color
                : item.colorTransparent,
          }}
        >
          {!isMobile && hovering ? (
            <p className="project-description">{item.description}</p>
          ) : (
            <h3 className="project-title">{item.name}</h3>
          )}
        </div>

        {/* BACK (mobile only) */}
        {isMobile && (
          <div
            className="project-card project-card-back card border-0 d-flex flex-column justify-content-center align-items-center text-center"
            onClick={handleBackClick}
            style={{ backgroundColor: item.color }}
          >
            <p className="project-description">{item.description}</p>

            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="project-link-btn"
              onClick={(e) => e.stopPropagation()} // prevents flip when clicking link
            >
              View Project
            </a>
          </div>
        )}
      </div>
    </div>
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