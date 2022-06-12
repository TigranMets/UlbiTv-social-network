import React from 'react';
import './MyButton.css';

const MyButton = ({children, ...props}) => {
    return (  
        <button {...props} className={`myButton ${props.className}`}>
            {children}
        </button>
    );
}

export default MyButton;