import { Link } from "react-router-dom";
import "../styles/App.css";

function Header() {
  return (
    <header className="header bg-primary fixed-top d-flex align-items-center justify-content-between">
      <Link to="/" className="text-light text-decoration-none w-100 text-center text-md-start">
        <h1 className="header-title my-0">Megan Ellman</h1>
      </Link>
    </header>
  );
}

export default Header;