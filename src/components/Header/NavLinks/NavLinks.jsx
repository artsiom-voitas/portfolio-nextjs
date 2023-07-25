import PropTypes from 'prop-types';
import NavLink from './NavLink';

function NavLinks({ className = '' }) {
    return (
        <nav className={`flex justify-between gap-8 ${className}`}>
            <NavLink
                href="/"
                title="Home"
            />
            <NavLink
                href="/about"
                title="About"
            />
            <NavLink
                href="/projects"
                title="Projects"
            />
        </nav>
    );
}

NavLinks.propTypes = {
    className: PropTypes.string
};

export default NavLinks;
