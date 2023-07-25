import PropTypes from 'prop-types';
import useThemeSwitcher from '../hooks/useThemeSwitcher';
import { MoonIcon, SunIcon } from '../icons';

function SwitchThemeButton({ className = '' }) {
    const [mode, setMode] = useThemeSwitcher();

    function changeTheme() {
        setMode(mode === 'dark' ? 'light' : 'dark');
    }
    return (
        <button
            onClick={changeTheme}
            className={`flex items-center justify-center rounded-full p-1
            ${className}
                ${
                    mode === 'light'
                        ? 'bg-dark text-light'
                        : 'bg-light text-dark'
                }`}>
            {mode === 'dark' ? (
                <SunIcon className="fill-dark" />
            ) : (
                <MoonIcon className="fill-dark" />
            )}
        </button>
    );
}

SwitchThemeButton.propTypes = {
    className: PropTypes.string
};

export default SwitchThemeButton;
