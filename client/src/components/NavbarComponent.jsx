import { Link } from "react-router-dom"

export function NavbarComponent() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/tasks">Tasks</Link>
                </li>
                <li>
                    <Link to="/tasks/new">New Task</Link>
                </li>
            </ul>
        </nav>)
}