
import {Nav, Li} from "./style";
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <Nav>
                <Li>
                    <Link to="/">Home</Link>
                </Li>
                <Li>
                    <Link to="/about">About</Link>
                </Li>
                <Li>
                    <Link to="/statistics">Statistics</Link>
                </Li>
        </Nav>
    )
}
export default Header;