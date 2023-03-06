import React from 'react';

function Project(props) {
    return (
        <div className='cardContainer'>
            {props.portfolios.map(item => (
                <div className="card" width={18} key={item.id}>
                    <a href={item.deployedLink}>
                     <img src={item.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">{item.description}</p>
                        <a href={item.repoLink} className="btn btn-primary">Go somewhere</a>
                    </div>    
                    </a>
                   
                </div>
            ))}
        </div>
    )
}

export default Project;