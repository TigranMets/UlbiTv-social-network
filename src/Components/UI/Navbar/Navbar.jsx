import React from 'react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../../App';
import MyButton from '../MyButton/MyButton';
import s from './Navbar.module.css';

const Navbar = () => {

    const { isAuth, setIsAuth } = useContext(AuthContext);

    const logOut = event => {
        event.preventDefault();
        setIsAuth(false);
        localStorage.removeItem('auth', 'false');
    }

    return (
        <div className={s.navbar}>
            <MyButton onClick={logOut}>Log out</MyButton>
            <div className={s.navbarLinks}>
                <NavLink to='/posts'>Posts</NavLink>
                <NavLink to='/about'>About</NavLink>
            </div>
        </div>
    )
}

export default Navbar;