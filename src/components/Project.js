import React from 'react';

function Project({ projects }) {
    return (
        <div className='row row-cols-1 row-cols-md-2 g-4'>
            {projects.map(item => (
                <div className="col">
                    <div className="card" style={{ width: '30rem' }} key={item.id}>
                        <a href={item.deployedLink} >
                            <img src={item.image} style={{ width: '30rem', height: '15rem' }} className="card-img-top img-fluid" alt="..." />
                        </a>
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">{item.description}</p>
                                <a href={item.repoLink} className="btn btn-primary">GitHub Repository</a>
                            </div>
                    </div>
                </div>

            ))}
        </div>
    )
}

export default Project;