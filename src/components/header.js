import React from 'react';

const Header = props => {
    return (
    <div className='header'> 
        <h1>React Mad Libs</h1>
        <h3>{props.title}</h3>
    </div>
    )
}

export default Header;