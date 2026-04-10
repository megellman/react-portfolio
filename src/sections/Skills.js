import "../styles/App.css";

const integrationAndAPIs = [
  "REST APIs",
  "JSON",
  "API Validation",
  "Authentication Debugging",
  "Endpoint Testing",
  "Error Analysis",
  "Postman",
];

const supportAndOperations = [
  "Front",
  "Intercom",
  "Jira",
  "Asana",
  "Monday",
  "ClickUp",
  "Notion",
  "Workflow Automation",
  "SLA Environments",
  "Ticket Management",
];

const documentationAndProcess = [
  "Process Documentation",
  "FAQ Libraries",
  "Escalation Write-ups",
  "Cross-functional Process Guides",
  "Root Cause Analysis",
];

const technicalFoundation = [
  "JavaScript (ES6+)",
  "HTML / CSS",
  "Browser DevTools",
  "Log Analysis",
  "Web Debugging",
  "Issue Reproduction",
];

function Skills() {
  return (
    <section className="skills-section container">
      <div className="row justify-content-center">
        
        <div className="col-12 col-sm-6 col-lg-3 text-center">
          <h6>Integration & APIs</h6>
          <ul className="list-unstyled">
            {integrationAndAPIs.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="col-12 col-sm-6 col-lg-3 text-center">
          <h6>Support & Operations</h6>
          <ul className="list-unstyled">
            {supportAndOperations.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="col-12 col-sm-6 col-lg-3 text-center">
          <h6>Documentation & Process</h6>
          <ul className="list-unstyled">
            {documentationAndProcess.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="col-12 col-sm-6 col-lg-3 text-center">
          <h6>Technical Foundation</h6>
          <ul className="list-unstyled">
            {technicalFoundation.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}

export default Skills;