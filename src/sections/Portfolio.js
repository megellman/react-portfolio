import Project from '../components/Project'
const projects = [
    {
        id: 1,
        name: 'Bullet Journal',
        description: "Full-stack journaling app with color-coded entry organization, built with Node.js, Express, Sequelize, and Handlebars. Focused on intuitive UX and persistent data management.",
        repoLink: 'https://github.com/megellman/bullet-journal',
        image: require('../assets/bullet-journal.png'),
        color: "#3b715eff",
        colorTransparent: "#568e7aff",
    },
    {
        id: 2,
        name: 'Code Quiz',
        description: 'Timed frontend quiz app with score tracking and local high score storage. Built with JavaScript, jQuery, HTML, and CSS with focus on clean state management and user feedback.',
        deployedLink: 'https://megellman.github.io/code-quiz/',
        repoLink: 'https://github.com/megellman/code-quiz',
        image: require('../assets/code-quiz.png'),
        color: "#af6472ff",
        colorTransparent: "#cd8a96ff",
    },
    {
        id: 3,
        name: 'Nibble Nabble',
        description: "Collaborative full-stack app for planning and saving menus with drink pairings. Built with JavaScript, Tailwind, and REST APIs with emphasis on third-party API integration and team-based development.",
        deployedLink: 'https://megellman.github.io/group-project/',
        repoLink: 'https://github.com/megellman/group-project',
        image: require('../assets/nibble-nabble.png'),
        color: "#183237ff",
        colorTransparent: "#365e66ff",
    },
    {
        id: 4,
        name: 'Team Profile Generator',
        description: 'Command-line tool that generates HTML team profiles from user input, with unit testing for class validation. Built with Node.js, Inquirer, and Jest to demonstrate backend logic and test-driven development.',
        repoLink: 'https://github.com/megellman/team-profile-generator',
        image: require('../assets/team-profile-generator.png'),
        color: "#b56e57ff",
        colorTransparent: "#d9937bff",
    },
    {
        id: 5,
        name: 'Support Hero',
        description: 'Customer support platform with ticket management, live chat, email notifications, and role-based access control. Built with React, Node.js, GraphQL, MongoDB, and JWT authentication, directly reflecting real-world SaaS support workflows.',
        deployedLink: 'https://dry-fjord-88699.herokuapp.com/login',
        repoLink: 'https://github.com/rmoscoe/support-hero',
        image: require('../assets/support-hero.png'),
        color: "#735eacff",
        colorTransparent: "#8a76c1f3",
    },
    {
        id: 6,
        name: 'Task Manager',
        description: 'Full-stack task tracker with CRUD operations, priority color-coding, and persistent storage. Built with Node/Express, jQuery, and Bootstrap, designed around workflow clarity and operational usability.',
        deployedLink: 'https://task-mananger-7vkh.onrender.com/',
        repoLink: 'https://github.com/megellman/task-mananger',
        image: require('../assets/task-manager.png'),
        color: "#4da0b5ff",
        colorTransparent: "#8dc4d3ff",
    },
]
function Portfolio() {
    return (
            <div className='container d-flex flex-column' style={{ paddingTop: "100px" }}>
                <h1 className='text-dark' style={{ textAlign: 'center', paddingBottom: "40px" }}>My Work</h1>
                <Project projects={projects} />
                <p className='mt-3 text-center'>View all my code and contributions on <a className='text-primary' href='https://github.com/megellman' target='_blank' rel='noreferrer'>GitHub</a></p>
            </div>       
    )
}

export default Portfolio;