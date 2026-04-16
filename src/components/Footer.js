import "../styles/App.css";
import resume from "../assets/resume.pdf";

function Footer() {
  return (
    <footer className="footer bg-primary">
      <ul className="nav justify-content-center flex-column flex-md-row text-center">
        <li className="nav-item">
          <a
            className="nav-link text-white footer-link"
            target="_blank"
            href="https://www.linkedin.com/in/megan-ellman/"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </li>

        <li className="nav-item">
          <a
            className="nav-link text-white footer-link"
            target="_blank"
            href="https://github.com/megellman"
            rel="noreferrer"
          >
            GitHub
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;