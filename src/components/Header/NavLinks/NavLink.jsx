import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

function NavLink({ href, title }) {
    const router = useRouter();
    return (
        <Link
            href={href}
            className="group relative">
            {title}
            <span
                className={`ease absolute -bottom-0.5 left-0 inline-block h-[1px]
                bg-dark transition-[width] duration-300 group-hover:w-full
                dark:bg-light
                ${router.asPath === href ? 'w-full' : 'w-0'}`}>
                &nbsp;
            </span>
        </Link>
    );
}

NavLink.propTypes = {
    href: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default NavLink;
