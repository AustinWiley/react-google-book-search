import React from "react";

function Nav() {
  return (
    <nav className="navbar is-danger" role="navigation" aria-label="main navigation">
        <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
                <a className="navbar-item">
                    Home
                </a>
                <a className="navbar-item">
                    Saved
                </a>
            </div>
        </div>
    </nav>
  );
}

export default Nav;



