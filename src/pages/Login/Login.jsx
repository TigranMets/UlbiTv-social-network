import React, { useContext } from 'react';
import { AuthContext } from '../../App';
// import { useState } from 'react';
import Input from '../../Components/UI/Input/Input';
import MyButton from '../../Components/UI/MyButton/MyButton';

const Login = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext);
    const login = event => {
        event.preventDefault();
        localStorage.setItem('auth', 'true');
        setIsAuth(true);
    }
    console.log(isAuth);
    return (
        <form onSubmit={login}>
            <Input type='email' placeholder='Email' />
            <Input type='password' placeholder='Password' />
            <MyButton>Login</MyButton>
        </form>
    )
}

export default Login