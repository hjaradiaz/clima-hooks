import React from 'react';

const Header = ({titulo}) => {
    return (
        <nav className="navbar navbar-dark bg-primary justify-content-center">
            <h2 className="text-light">{titulo}</h2>
        </nav>
    );
};

export default Header;