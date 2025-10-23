import { Link } from "react-router-dom"

export default function Connect() {
    return (
        <div className="d-flex justify-content-around align-items-center" style={{ height:"100vh" }}>
            <div>
                <h1>Let’s Talk</h1>
                <p>Whether it’s a project, opportunity, or idea — I’m just a message away</p>
            </div>
            <Link to="/Contact" className="btn btn-outline-dark btn-round btn-lg">
               Say Hi
            </Link>
        </div>
    )
}