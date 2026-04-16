
import "../styles/App.css";

export default function AboutMe() {
  return (
    <section
      id="aboutMe"
      className="about-section d-flex flex-column justify-content-center align-items-center bg-primary text-light text-center"
    >
      <p className="about-text">
        I spent two years at ClickUp helping both customers and internal teams get value out of complex software quickly.

On the customer side, I supported B2B clients with platform configuration, workflow automation, API integrations, and troubleshooting. I learned to separate true product issues from user error, write clear escalation summaries, and translate technical concepts for non-technical stakeholders.

Internally, I helped onboard hundreds of employees to ClickUp’s tech stack—supporting high-volume hiring through documentation, training, and coordination with IT, HR, and Recruiting.

Afterward, I completed UC Berkeley Full-Stack Web Development Bootcamp, building projects in JavaScript, REST APIs, and MySQL to better understand how software works under the hood. I also earned HubSpot certifications in Service Hub and Sales.

I work at the intersection of technical fluency and human judgment—translating complexity, building scalable processes, and making sure implementation actually sticks.
      </p>
    </section>
  );
}