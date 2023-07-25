import PropTypes from 'prop-types';
import { NavLinkMobile } from '@/components/Header';

function NavLinksMobile({ className = '', setIsOpen }) {
    return (
        <nav className={`flex justify-between ${className}`}>
            <NavLinkMobile
                href="/"
                title="Home"
                setIsOpen={setIsOpen}
            />
            <NavLinkMobile
                href="/about"
                title="About"
                setIsOpen={setIsOpen}
            />
            <NavLinkMobile
                href="/projects"
                title="Projects"
                setIsOpen={setIsOpen}
            />
        </nav>
    );
}

NavLinksMobile.propTypes = {
    className: PropTypes.string
};

export default NavLinksMobile;
