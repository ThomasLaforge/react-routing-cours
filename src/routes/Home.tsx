import { Link, useParams } from "react-router-dom";

export default function Home() {
    const params = useParams()

    return (
        <div>
            <h1>Home</h1>
            <div>Bonjour {params.username}</div>
            <Link to="/about">go to About</Link>
        </div>
    )
}