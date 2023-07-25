import PropTypes from 'prop-types';
function Burger({ isOpen, setIsOpen }) {
    function openModal() {
        setIsOpen(!isOpen);
    }

    return (
        <button
            className="hidden flex-col items-center justify-center lg:flex"
            onClick={openModal}>
            <span
                className={`block h-0.5 w-6 rounded-sm bg-dark transition-all
                duration-300 ease-out dark:bg-light
                ${isOpen ? 'translate-y-1 rotate-45' : '-translate-y-0.5'}`}
            />
            <span
                className={`my-0.5 block h-0.5  w-6 rounded-sm bg-dark transition-all
                duration-300 ease-out dark:bg-light
                ${isOpen ? 'opacity-0' : 'opacity-100'}`}
            />
            <span
                className={`block h-0.5 w-6 rounded-sm bg-dark transition-all
                duration-300 ease-out dark:bg-light
                ${isOpen ? '-translate-y-1 -rotate-45' : 'translate-y-0.5'}`}
            />
        </button>
    );
}

Burger.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    setIsOpen: PropTypes.func.isRequired
};

export default Burger;
