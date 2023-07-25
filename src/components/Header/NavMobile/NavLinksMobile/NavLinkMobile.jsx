import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

function NavLinkModal({ href, title, setIsOpen }) {
    const router = useRouter();
    function handleClick() {
        setIsOpen(false);
        router.push(href);
    }
    return (
        <button
            className="group relative my-2 text-xl text-light dark:text-dark"
            onClick={handleClick}>
            {title}
            <span
                className={`ease absolute -bottom-0.5 left-0 inline-block h-[1px]
                 bg-dark transition-[width] duration-300
                group-hover:w-full dark:bg-light
                ${router.asPath === href ? 'w-full' : 'w-0'}`}>
                &nbsp;
            </span>
        </button>
    );
}

NavLinkModal.propTypes = {
    href: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default NavLinkModal;
