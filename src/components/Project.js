import React from 'react';
import { NavLink } from 'react-router-dom';
import { useHover } from '@uidotdev/usehooks';

function ProjectCard({ item }) {
    const [ref, hovering] = useHover();

    return (
            <div ref={ref} className="card  border-0" style={{ width: '300px', height: '200px', overflow: "hidden" }}>
                {hovering ? (
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">{item.description}</p>
                        <NavLink className="hover-link project-link" to={item.repoLink} target="_blank">
                            GitHub Repo
                        </NavLink>
                        { item.deployedLink && (
                            <NavLink className="hover-link project-link" to={item.deployedLink} target="_blank">
                                Deployed Application
                            </NavLink> )}
                    </div>
                ) : (
                    <a href={item.deployedLink}>
                        <img
                            src={item.image}
                            style={{ objectFit: "cover", height: "200px"}}
                            className="card-img-top img-fluid"
                            alt="..."
                        />
                    </a>
                )}
            </div>
    );
}

export default function Project({ projects }) {
    return (
        <div className="d-flex flex-wrap justify-content-center" style={{ gap: "20px" }}>
            {projects.map((item, i) => (
                <ProjectCard key={i} item={item} />
            ))}
        </div>
    );
}