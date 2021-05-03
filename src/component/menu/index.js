import React from 'react';
import './styles.scss';
import jiologo from "../../../src/jiologo.svg"
import { NavLink } from "react-router-dom";

function Menu() {
  return (
      <>
    <div className="App">
    <div className="menubar desktopview">
      <div className="menubarwrapper">
        <div className="logo">
          <img src={jiologo}/>
        </div>
        <div className="nav">
           <NavLink className="main-nav" activeClassName="main-nav-active" to="/jioglass">JIOGLASS</NavLink>
           <NavLink className="main-nav" activeClassName="main-nav-active" to="/experiences">EXPERIENCES </NavLink>
           <NavLink className="main-nav" activeClassName="main-nav-active" to="/developer">DEVELOPER</NavLink>
           <NavLink className="main-nav" activeClassName="main-nav-active" to="/career">CAREER</NavLink>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}

export default Menu;
