import React from 'react';

const frontEnd = ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Responsive Design', 'React', 'Bootstrap'];
const backEnd = ['APIs', 'Node', 'Express', 'MySQL', 'Sequelize', 'MongoDB', 'Mongoose', 'REST', 'GraphQL'];

const toolsAndTechnologies = ['Git', 'GitHub', 'AJAX', 'Insomnia / Postman', 'Day.js', 'Unit Testing with Jest', 'Problem Solving', 'Pseudocode', 'REST API Design'];

function Resume() {
    return (
        <div className='container border rounded border-white bg-white' style={{marginTop:"-90px", zIndex:"2", position:"relative", padding:"20px", boxShadow:"rgba(0,0,0,0.15) 0 5px 15px"}}>
            <a href={require('../assets/resume.pdf')} download='MeganEllman'
                style={{ color: "black", textDecoration: "none" }}>
            <div className='row justify-content-center'>
                <div className='col-4 text-center'>
                    <h4>Front-end</h4>
                    <ul className='list-inline'>
                        {frontEnd.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className='col-4 text-center'>
                    <h4>Back-end</h4>
                    <ul className='list-inline'>
                        {backEnd.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className='col-4 text-center'>
                    <h4>Tools and Technologies</h4>
                    <ul className='list-inline'>
                        {toolsAndTechnologies.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </a>
        </div>
    )
}

export default Resume;