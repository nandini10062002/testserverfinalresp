import React from "react";
import "./Nav.css";
import {NavLink} from "react-router-dom";
const Nav=()=>{
    return(<>
    <div className="navbar">
            <div className="navbar__logo">
                <img src="img/magna.svg" alt="company_logo"/>
            </div>

            <div className="navbar__options">
                <NavLink to="/">
                    <img src="img/icon/dashboard.svg" alt="dashboard_icon"/>
                    <span className="navbar__option">Dashboard</span>
                </NavLink>

                <NavLink to="/employees">
                    <img src="img/icon/users.svg" alt="Employees_icon"/>
                    <span className="navbar__option">Employees</span>
                </NavLink>

                <NavLink to = "/help">
                    <img src="img/icon/help-circle.svg" alt="Help_icon"/>
                    <span className="navbar__option">Help</span>
                </NavLink>
                
                <NavLink to="/">
                    <img src="img/icon/log-out.svg" alt="Logout_icon"/>
                    <span className="navbar__option">Logout</span>
                </NavLink>

            </div>
            
        </div>
    </>)
}

export default Nav;