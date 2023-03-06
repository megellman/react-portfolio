import React from 'react';
import Project from '../Project'
const portfolios = [
    {
        id: 1,
        name: 'Bullet Journal',
        description: 'Full Stack',
        deployedLink: 'https://bullet-journal.herokuapp.com/',
        repoLink: 'https://github.com/megellman/bullet-journal',
        image: '../../assets/bullet-journal',
    },
    {
        id: 2,
        name: 'Code Quiz',
        description: 'Full Stack',
        deployedLink: 'https://megellman.github.io/code-quiz/',
        repoLink: 'https://github.com/megellman/code-quiz',
        image: '../../assets/code-quiz',
    },
    {
        id: 3,
        name: 'Nibble Nabble',
        description: "Front End",
        deployedLink: 'https://megellman.github.io/group-project/',
        repoLink: 'https://github.com/megellman/group-project',
        image: '../../assets/nibble-nabble',
    },
    {
        id: 4,
        name: 'Text Editor',
        description: 'Full Stack',
        deployedLink: 'https://just-a-text-editor1.herokuapp.com/',
        repoLink: 'https://github.com/megellman/text-editor',
        image: '../../assets/jate',
    },
    {
        id: 5,
        name: 'Team Profile Generator',
        description: 'Back End',
        repoLink: 'https://github.com/megellman/team-profile-generator',
        image: '../../assets/team-profile-generator',
    },
    {
        id: 6,
        name: 'Work Day Scheduler',
        description: 'Front End',
        deployedLink: 'https://megellman.github.io/work-day-scheduler/',
        repoLink: 'https://github.com/megellman/work-day-scheduler',
        image: '../../assets/work-day-scheduler',
    }
  ]
function Portfolio() {
    return (
        <Project portfolio={portfolios} />
    )
}

export default Portfolio;