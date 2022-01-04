import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

Header.propTypes = {

};

function Header(props) {
    return (
        <header className="header">
            <h1>Todos</h1>
            <input className="new-todo" placeholder="What needs to be done?" autoFocus/>
        </header>
    );
}

export default Header;