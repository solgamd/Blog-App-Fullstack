import * as React from 'react';
import { Link } from 'react-router-dom';

export interface NavbarProps {
}

const Navbar: React.SFC<NavbarProps> = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand">Navbar</a>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">All Blogs</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/new" className="nav-link">Write New Post</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;