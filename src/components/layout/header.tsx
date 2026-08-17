import type {ReactElement} from 'react';
import {NavLink} from 'react-router-dom';
import {AppRoute} from "../../const.ts";
function Header(): ReactElement {
    return (
        <header className="header">
        <span className="logo">L.</span>
            <nav className="navigation">
    <ul className="navigation-list">
    <li className="navigation-list-item">
        <NavLink
            className={({ isActive }) => `navigation-link ${isActive ? 'navigation-active' : ''}`}
            to={AppRoute.MainPage}
        >
            About
        </NavLink>
    </li>
    <li className="navigation-list-item">
        <NavLink
            className={({ isActive }) => `navigation-link ${isActive ? 'navigation-active' : ''}`}
            to={AppRoute.ProjectsList}
        >
            Work
        </NavLink>
    </li>
    </ul>
    </nav>
    </header>
    );
}

export default Header;
