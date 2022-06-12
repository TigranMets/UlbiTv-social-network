import { getSuggestedQuery } from '@testing-library/react';
import React from 'react';
import s from './Input.module.css';

const Input = (props) => {
    // debugger;
    return <input className={s.myInput} {...props}/>;
}
 
export default Input;