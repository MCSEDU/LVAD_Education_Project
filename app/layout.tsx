import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/tier1">Tier 1</Link></li>
                    <li><Link to="/tier2">Tier 2</Link></li>
                    <li><Link to="/tier3">Tier 3</Link></li>
                    <li><Link to="/tier4">Tier 4</Link></li>
                    <li><Link to="/backlog">Project Backlog</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
            <main>{children}</main>
        </div>
    );
};

export default Layout;