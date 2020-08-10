import React from 'react';
import { Link} from 'react-router-dom';
import './Navigation.css'

function Navigation() {
    return (
        <div className="nav">
            <Link to="/">홈(Home)</Link>
            <Link to="/about">기타(About)</Link>
        </div>
    );
}

export default Navigation;