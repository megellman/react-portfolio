import { Link } from "react-router-dom"

export default function Connect() {
    return (
        <div className="d-flex justify-content-around align-items-center" style={{ height:"100vh" }}>
            <div>
                <h1 style={{fontSize:"6rem"}}>Let’s Talk</h1>
                <p className="lead" >Open to technical support, production-focused roles, and collaborative problem-solving challenges.</p>
            </div>
            <Link to="/Contact" className="btn btn-outline-dark btn-round btn-lg">
               Say Hi
            </Link>
        </div>
    )
}