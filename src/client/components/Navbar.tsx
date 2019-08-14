import * as React from 'react';
import { NavLink } from 'react-router-dom';

export interface NavbarProps {
}

const Navbar: React.SFC<NavbarProps> = () => {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-danger">
            <span className="navbar-brand text-success">JUST 2 LINES</span>
            <div className="collapse navbar-collapse" id="navbarNav">
                <div className="navbar-nav ml-auto">
                    <NavLink exact to="/"
                        className="nav-item nav-link"
                        activeClassName="nav-item nav-link active text-success">Blog Feed</NavLink>
                    <NavLink exact to="/admin"
                        className="nav-item nav-link"
                        activeClassName="nav-item nav-link active text-success">Edit Blogs</NavLink>
                    <NavLink exact to="/new"
                        className="nav-item nav-link"
                        activeClassName="nav-item nav-link active text-success">Write New Post</NavLink>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;