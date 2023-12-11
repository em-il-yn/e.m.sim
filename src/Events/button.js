import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Button = (props) => {
    const [isHovered, setIsHovered] = useState(false);

    const btnStyle = {
        fontFamily: 'Trebuchet MS',
        fontSize: '15px',
        color: isHovered ? '#000000' : '#0072E7',
        backgroundColor: isHovered ? '#0072E7' : 'transparent',
        fontWeight: isHovered ? 'bold' : 'normal',
        position: 'relative',
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'center',
        padding: '0.5rem',
        margin: '0rem 0rem 1rem 1rem',
        width: '14.5em',
        border: '1px solid #0072E7',
        filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
        borderRadius: '5px',
        transition:
            'background-color 0.5s cubic-bezier(0.45, 0.19, 0.34, 0.75), color 0.5s cubic-bezier(0.45, 0.19, 0.34, 0.75), font-weight 0.5s cubic-bezier(0.45, 0.19, 0.34, 0.75)',
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <Link
            to={props.to}
            style={btnStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {props.text}
        </Link>
    );
};

export default Button;
