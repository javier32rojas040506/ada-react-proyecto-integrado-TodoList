import { Link } from "react-router-dom";
function Menu(){
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Tasks">Tareas</Link>
                </li>
                <li>
                    <Link to="/AboutUs">About Us</Link>
                </li>
            </ul>
        </nav>
    );
};
export {Menu}