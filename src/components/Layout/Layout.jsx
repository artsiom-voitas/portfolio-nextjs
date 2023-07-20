import PropTypes from 'prop-types';
import React from 'react';

function Layout({ children, className = '' }) {
    return (
        <div className={`${className} z-0 inline-block h-full w-full bg-light p-32 pt-0`}>
            {children}
        </div>
    );
}

Layout.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

export default Layout;
