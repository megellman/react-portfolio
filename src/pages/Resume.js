import React from 'react';

const frontEnd = ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Responsive Design', 'React', 'Bootstrap'];
const backEnd = ['APIs', 'Node', 'Express', 'MySQL', 'Sequelize', 'MongoDB', 'Mongoose', 'REST', 'GraphQL'];

function Resume() {
    return (
        <div>
            <h2>Resume</h2>
            <a href={ require('../assets/resume.pdf')} download='MeganEllman'>
                Download Resume
            </a>
            <h3>Proficencies</h3>
            <div className='row row-cols-1 row-cols-md-2 g-4'>
            <div className='col-6'>
             <h4>Front-end</h4>
            <ul>
                {frontEnd.map(item => (
                    <li>{item}</li>
                ))}
            </ul>
            </div>
            <div className='col-6'>
            <h4>Back-end</h4>
            <ul>
                {backEnd.map(item => (
                    <li>{item}</li>
                ))}
            </ul> 
              
            </div>
            </div>
        </div>
    )
}

export default Resume;