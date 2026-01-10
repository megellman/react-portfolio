import { Link } from "react-router-dom"

export default function Connect() {
    return (
        <div className="d-flex justify-content-around align-items-center" style={{ height:"100vh" }}>
            <div>
                <h1 style={{fontSize:"5rem"}}>Let’s Talk</h1>
                <p className="lead">Whether it’s a technical support role, production-focused opportunity, or collaborative problem-solving challenge, I’m always open to a conversation.</p>
            </div>
            <Link to="/Contact" className="btn btn-outline-dark btn-round btn-lg">
               Say Hi
            </Link>
        </div>
    )
}