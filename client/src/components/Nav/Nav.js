import React from "react";

function Nav() {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">

            <a className="navbar-brand" href="/">Google Books</a>

            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/search">Search</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/saved">Saved</a>
                    </li>
                </ul>
            </div>
        </nav>

    );
}

export default Nav;