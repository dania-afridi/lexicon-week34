import React from "react";

const NavBar = (props)=> {
    return(
    <nav className="nav-bar">
        <p>{props.darkMode ? 'Dark Mode' : 'Light Mode'}</p>
        <input type="submit" value="Toggle" className ="toggle-btn" onClick={props.handler}/>
    </nav>
);
};

export default NavBar;