import { Link } from "react-router-dom";
import "../styles/App.css";

export default function Connect() {
  return (
    <section className="connect-section d-flex flex-column flex-md-row justify-content-center align-items-center text-center text-md-start">
      
      <div className="connect-text">
        <h1 className="connect-title">Let’s Talk</h1>
        <p className="lead">
          Open to roles where
          technical fluency drives customer outcomes.
        </p>
      </div>

      <Link to="/Contact" className="btn btn-outline-dark btn-lg connect-btn">
        Say Hi
      </Link>

    </section>
  );
}