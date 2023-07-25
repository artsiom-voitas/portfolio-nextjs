import NavLink from './NavLink';

function NavLinks() {
    return (
        <nav className="flex justify-between gap-8">
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

export default NavLinks;
