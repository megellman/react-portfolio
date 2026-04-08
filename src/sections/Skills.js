const integrationAndAPIs = [
  'REST APIs',
  'JSON',
  'API Validation',
  'Authentication Debugging',
  'Endpoint Testing',
  'Error Analysis',
  'Postman',
];

const supportAndOperations = [
  'Front',
  'Intercom',
  'Jira',
  'Asana',
  'Monday',
  'ClickUp',
  'Notion',
  'Workflow Automation',
  'SLA Environments',
  'Ticket Management',
];

const documentationAndProcess = [
  'Process Documentation',
  'FAQ Libraries',
  'Escalation Write-ups',
  'Cross-functional Process Guides',
  'Root Cause Analysis',
];

const technicalFoundation = [
  'JavaScript (ES6+)',
  'HTML / CSS',
  'Browser DevTools',
  'Log Analysis',
  'Web Debugging',
  'Issue Reproduction',
];

function Skills() {
  return (
    <div
      className="container border rounded border-white bg-white"
      style={{
        marginTop: '-90px',
        scrollMarginTop: '160px',
        zIndex: '2',
        position: 'relative',
        padding: '20px',
        boxShadow: 'rgba(0,0,0,0.15) 0 5px 15px',
        fontSize: '1.2rem',
      }}
    >
      <div className="row justify-content-center">
        <div className="col-3 text-center">
          <h6>Integration & APIs</h6>
          <ul className="list-unstyled">
            {integrationAndAPIs.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="col-3 text-center">
          <h6>Support & Operations</h6>
          <ul className="list-unstyled">
            {supportAndOperations.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="col-3 text-center">
          <h6>Documentation & Process</h6>
          <ul className="list-unstyled">
            {documentationAndProcess.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="col-3 text-center">
          <h6>Technical Foundation</h6>
          <ul className="list-unstyled">
            {technicalFoundation.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;