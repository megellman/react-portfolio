import React from 'react';
import { NavLink } from 'react-router-dom'

function Project({ projects }) {
    return (
        <div className='row row-cols-1 row-cols-lg-2 g-5'>
            {projects.map((item, i) => (
                <div key={i} className="col">
                    <div className="card border border-dark border-2" style={{ width: '30rem' }} >
                        <a href={item.deployedLink} >
                            <img src={item.image} style={{ width: '30rem', height: '15rem' }} className="card-img-top img-fluid" alt="..." />
                        </a>
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">{item.description}</p>
                            <NavLink
                                className={"hover-link project-link"}
                                to={item.repoLink}
                                target="_blank">GitHub Repo</NavLink>
                            {item.deployedLink ? <NavLink
                                className={"hover-link project-link"}
                                to={item.deployedLink}
                                target="_blank">Deployed Application</NavLink> : null}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Project;