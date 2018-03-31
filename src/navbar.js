import React from 'react';
import {Link} from 'react-router-dom'

const NavBar = props => {
  return (<div>
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <i className="fas fa-globe">ADVNTR</i>
        </Link>
      </div>
      <div className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item">
            <i className="fas fa-user"></i>
          </div>
        </div>
      </div>
    </nav>
  </div>)
}

export default NavBar
