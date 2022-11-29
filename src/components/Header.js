import React from 'react';

function Header({ onDarkModeClick, btnText }) {
    return (
        <div>
            <h2>Shopster</h2>
            <button onClick={onDarkModeClick}>{btnText ? "Light" : "Dark"} Mode</button>
        </div>
    );
}

export default Header;

