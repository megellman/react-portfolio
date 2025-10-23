import { Link } from "react-router-dom"

export default function Connect() {
    return (
        <div className="d-flex justify-content-around mt-5 py-3 bg-primary text-light">
            <div>
                <h1>Let’s Talk</h1>
                <p>Whether it’s a project, opportunity, or idea — I’m just a message away</p>
            </div>
            <Link to="/Contact" className="align-self-center btn btn-lg text-white contact">
               Say Hi
            </Link>
        </div>
    )
}