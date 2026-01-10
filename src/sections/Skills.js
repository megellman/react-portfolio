const webAndAppFundamentals = [
  'HTML',
  'CSS',
  'JavaScript (ES6+)',
  'React',
  'Responsive UI Design',
  'Client-side Error Handling'
];

const apisAndBackend = [
  'REST APIs',
  'GraphQL',
  'Node.js',
  'Express',
  'Async Workflows',
  'Data Validation',
  'Error Handling'
];

const databases = [
  'MySQL',
  'Sequelize',
  'MongoDB',
  'Mongoose',
  'Relational Data Concepts',
  'Document-based Data Concepts'
];

const debuggingAndTooling = [
  'Git',
  'GitHub',
  'Postman / Insomnia',
  'Browser Developer Tools',
  'Unit Testing with Jest'
];

const problemSolving = [
  'Issue Reproduction',
  'Root Cause Analysis',
  'Pseudocode',
  'Logical Decomposition',
  'API Behavior Analysis'
];

function Skills() {
  return (
    <div
      className="container border rounded border-white bg-white"
      style={{
        marginTop: '-90px',
        scrollMarginTop: '150px',
        zIndex: '2',
        position: 'relative',
        padding: '20px',
        boxShadow: 'rgba(0,0,0,0.15) 0 5px 15px',
      }}
    >
      <div className="row justify-content-center">
        <div className="col-4 text-center">
          <h3>Web & Applications</h3>
          <ul className="list-unstyled">
            {webAndAppFundamentals.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="col-4 text-center">
          <h3>APIs & Backend</h3>
          <ul className="list-unstyled">
            {apisAndBackend.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="col-4 text-center">
          <h3>Databases</h3>
          <ul className="list-unstyled">
            {databases.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="row justify-content-center mt-4">
        <div className="col-6 text-center">
          <h3>Debugging & Tooling</h3>
          <ul className="list-unstyled">
            {debuggingAndTooling.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="col-6 text-center">
          <h3>Problem Solving</h3>
          <ul className="list-unstyled">
            {problemSolving.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;