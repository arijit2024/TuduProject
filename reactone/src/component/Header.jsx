import React from "react";
import { Link } from 'react-router-dom';


const Header = () => {
    return <>
            <nav className="navbar navbar-expand-lg bg-dark mb-4">
                <div className="container-fluid">
                    <div className="navbar-nav">
                        <Link className="nav-link" to="/Home">Home</Link>
                        {/* <Link className="nav-link active" aria-current="page" to="/About">About</Link>
                        <Link className="nav-link" to="/Login">Login</Link> */}
                    </div>
                </div>
            </nav>
    </>
}

export default Header;