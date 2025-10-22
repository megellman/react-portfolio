import React from 'react';
import Project from '../components/Project'
const projects = [
    {
        id: 1,
        name: 'Bullet Journal',
        description: 'HTML | CSS | JavaScript | Node.js | MySQL | Sequelize | Express | Express-Handlebars | Express-Session',
        repoLink: 'https://github.com/megellman/bullet-journal',
        image: require('../assets/bullet-journal.png'),
    },
    {
        id: 2,
        name: 'Code Quiz',
        description: 'HTML | CSS | Git | jQuery',
        deployedLink: 'https://megellman.github.io/code-quiz/',
        repoLink: 'https://github.com/megellman/code-quiz',
        image: require('../assets/code-quiz.png'),
    },
    {
        id: 3,
        name: 'Nibble Nabble',
        description: "HTML | CSS | Git | jQuery | Tailwind",
        deployedLink: 'https://megellman.github.io/group-project/',
        repoLink: 'https://github.com/megellman/group-project',
        image: require('../assets/nibble-nabble.png'),
    },
    {
        id: 4,
        name: 'Team Profile Generator',
        description: 'Back End',
        repoLink: 'https://github.com/megellman/team-profile-generator',
        image: require('../assets/team-profile-generator.png'),
    },
    {
        id: 5,
        name: 'Support Hero',
        description: 'Full Stack',
        deployedLink: 'https://dry-fjord-88699.herokuapp.com/login',
        repoLink: 'https://github.com/rmoscoe/support-hero',
        image: require('../assets/support-hero.png')
    },
    {
        id: 6,
        name: 'Task Manager',
        description: 'Full Stack',
        deployedLink: 'https://task-mananger-7vkh.onrender.com/',
        repoLink: 'https://github.com/megellman/task-mananger',
        image: require('../assets/task-manager.png'),
    },

]
function Portfolio() {
    return (
        <div className='container' style={{ paddingTop: "150px", paddingBottom: "200px" }}>
            <h2 style={{ textAlign: 'center', paddingBottom: "50px" }}>My Work</h2>
            <Project projects={projects} />   
        </div>
    )
}

export default Portfolio;