import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = () => {
    return (
        <div className={s.navbar}>
            <div className={s.navbarLinks}>
                <NavLink to='/posts'>Posts</NavLink>
                <NavLink to='/about'>About</NavLink>
            </div>
        </div>
    )
}

export default Navbar;