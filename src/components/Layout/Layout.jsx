import PropTypes from 'prop-types';
import React from 'react';

function Layout({ children, className = '' }) {
    return (
        <div
            className={`${className} z-0 inline-block h-full w-full
                    bg-light p-32 pt-0 dark:bg-dark xl:p-24 lg:p-16 md:p-12 sm:p-8`}>
            {children}
        </div>
    );
}

Layout.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

export default Layout;
