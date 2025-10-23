import { NavLink } from 'react-router-dom';
import { useHover } from '@uidotdev/usehooks';

function ProjectCard({ item }) {
    const [ref, hovering] = useHover();

    return (
        <NavLink className={"hover-link project-link"} to={item.deployedLink ? item.deployedLink : item.repoLink} target='_blank'>
            <div ref={ref} className="card  border-0" style={{ width: '300px', height: '200px', overflow: "hidden", color: "white" }}>
                {hovering ? (
                    <div className="card-body d-flex justify-content-center align-items-center" style={{backgroundColor: item.color}}>
                        <p className="card-text">{item.description}</p>
                    </div>
                ) : (
                    <div className='card-body d-flex justify-content-center align-items-center' style={{ backgroundColor: item.colorTransparent }}>
                        <h3 style={{textAlign:"center"}}>{item.name}</h3>
                    </div>
                )}
            </div>
        </NavLink>
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