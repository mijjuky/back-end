import { NavLink } from "react-router-dom";
import '../../styles/components/layout/Nav.css'


const Nav = (props) => {
    return (
        <nav>
            <div>
                <ul className="holder">
                    <li><NavLink activeClassName="activo" exact to="/">World</NavLink></li>
                    <li><NavLink activeClassName="activo" exact to="/espiritus">Espiritus</NavLink></li>
                    <li><NavLink activeClassName="activo" exact to="/void">Vacio</NavLink></li>
                    <li><NavLink activeClassName="activo" exact to="/unete">Unete</NavLink></li>
                </ul>
            </div>
        </nav>

    )
}

export default Nav;