import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

Header.propTypes = {
    actions: PropTypes.object,
};

Header.defaultProps = {
    actions: {}
};

function Header({actions}) {
    return (
        <header className="header">
            <h1>Todos</h1>
            <input className="new-todo" placeholder="What needs to be done?" autoFocus
                onKeyUp={(event) => event.keyCode === 13 && actions.add(event)}
            />
        </header>
    );
}

export default Header;