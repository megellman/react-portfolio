import Project from '../components/Project'
const projects = [
    {
        id: 1,
        name: 'Bullet Journal',
        description: "Full stack journaling app built with Node.js, Express, Sequelize, and Handlebars for organizing and color-coding personal entries",
        repoLink: 'https://github.com/megellman/bullet-journal',
        image: require('../assets/bullet-journal.png'),
        color: "#3b715eff",
        colorTransparent: "#568e7aff",
    },
    {
        id: 2,
        name: 'Code Quiz',
        description: 'Frontend quiz app built with JavaScript, jQuery, HTML, and CSS that features timed questions, score tracking, and local storage for saving high scores',
        deployedLink: 'https://megellman.github.io/code-quiz/',
        repoLink: 'https://github.com/megellman/code-quiz',
        image: require('../assets/code-quiz.png'),
        color: "#af6472ff",
        colorTransparent: "#cd8a96ff",
    },
    {
        id: 3,
        name: 'Nibble Nabble',
        description: "Full stack web app built with JavaScript, jQuery, Tailwind CSS, and REST APIs (TheCocktailDB, Spoonacular, Edamam) that lets users search, plan, and save custom dinner party menus with paired cocktails and wines",
        deployedLink: 'https://megellman.github.io/group-project/',
        repoLink: 'https://github.com/megellman/group-project',
        image: require('../assets/nibble-nabble.png'),
        color: "#183237ff",
        colorTransparent: "#365e66ff",
    },
    {
        id: 4,
        name: 'Team Profile Generator',
        description: 'Backend command-line app built with Node.js, Inquirer, and Jest that generates dynamic HTML team profiles from user input and includes unit testing for class validation',
        repoLink: 'https://github.com/megellman/team-profile-generator',
        image: require('../assets/team-profile-generator.png'),
        color: "#b56e57ff",
        colorTransparent: "#d9937bff",
    },
    {
        id: 5,
        name: 'Support Hero',
        description: 'Full stack React and Node.js app with MongoDB, GraphQL, and JWT for customer support tickets, live chat, email notifications, dark mode, and role-based access',
        deployedLink: 'https://dry-fjord-88699.herokuapp.com/login',
        repoLink: 'https://github.com/rmoscoe/support-hero',
        image: require('../assets/support-hero.png'),
        color: "#735eacff",
        colorTransparent: "#8a76c1f3",
    },
    {
        id: 6,
        name: 'Task Manager',
        description: 'Full stack web app built with Node.js, Express, jQuery, and Bootstrap that lets users create, edit, delete, and track tasks with priority-based color coding and persistent JSON storage',
        deployedLink: 'https://task-mananger-7vkh.onrender.com/',
        repoLink: 'https://github.com/megellman/task-mananger',
        image: require('../assets/task-manager.png'),
        color: "#4da0b5ff",
        colorTransparent: "#8dc4d3ff",
    },

]
function Portfolio() {
    return (
        <div className='container' style={{ paddingTop: "150px", paddingBottom: "200px" }}>
            <h2 style={{ textAlign: 'center', paddingBottom: "50px" }}>My Work</h2>
            <Project projects={projects} />  
            <a className='btn btn-lg btn-outline-primary btn-block mt-5' href='https://github.com/megellman' target='_blank' style={{width:"100%"}} rel="noreferrer" >See more of my work</a> 
        </div>
    )
}

export default Portfolio;