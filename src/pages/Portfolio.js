import React from 'react';
import Project from '../components/Project'
const projects = [
    {
        id: 1,
        name: 'Bullet Journal',
        description: 'HTML | CSS | JavaScript | Node.js | MySQL | Sequelize | Express | Express-Handlebars | Express-Session',
        deployedLink: 'https://bullet-journal.herokuapp.com/',
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
        name: 'Text Editor',
        description: 'Full Stack',
        deployedLink: 'https://just-a-text-editor1.herokuapp.com/',
        repoLink: 'https://github.com/megellman/text-editor',
        image: require('../assets/jate.png'),
    },
    {
        id: 5,
        name: 'Team Profile Generator',
        description: 'Back End',
        repoLink: 'https://github.com/megellman/team-profile-generator',
        image: require('../assets/team-profile-generator.png'),
    },
    {
        id: 6,
        name: 'Work Day Scheduler',
        description: 'Front End',
        deployedLink: 'https://megellman.github.io/work-day-scheduler/',
        repoLink: 'https://github.com/megellman/work-day-scheduler',
        image: require('../assets/work-day-scheduler.png'),
    },
    {
        id: 2,
        name: 'Support Hero',
        description: 'Full Stack',
        deployedLink: 'https://dry-fjord-88699.herokuapp.com/',
        repoLink: 'https://github.com/rmoscoe/support-hero',
        image: require('../assets/support-hero.png'),
    }
  ]
function Portfolio() {
    return (
        <div className='container'>
            <h2>Portfolio</h2>
            <Project projects={projects} />
        </div>
    )
}

export default Portfolio;