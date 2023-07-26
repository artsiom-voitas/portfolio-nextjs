import { useEffect, useState } from 'react';

function useThemeSwitcher() {
    const prefersDarkQuery = '(prefers-color-scheme: dark)';
    const [mode, setMode] = useState('');

    useEffect(() => {
        const mediaQuery = window.matchMedia(prefersDarkQuery);
        const userPref = window.localStorage.getItem('theme');

        function handleChange() {
            if (userPref) {
                let checkTheme = userPref === 'dark' ? 'dark' : 'light';
                setMode(checkTheme);
                if (checkTheme === 'dark') {
                    document.documentElement.classList.add('dark');
                } else {
                    document.documentElement.classList.remove('dark');
                }
            } else {
                let checkTheme = mediaQuery.matches ? 'dark' : 'light';
                setMode(checkTheme);
                if (checkTheme === 'dark') {
                    document.documentElement.classList.add('dark');
                } else {
                    document.documentElement.classList.remove('dark');
                }
            }
        }
        handleChange();
        mediaQuery.addEventListener('change', handleChange);

        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    useEffect(() => {
        const metaTag = document.querySelector('meta[name="theme-color"]');
        if (mode === 'light') {
            window.localStorage.setItem('theme', 'light');
            document.documentElement.classList.remove('dark');
            metaTag.setAttribute('content', '#f5f5f5');
        } else if (mode === 'dark') {
            window.localStorage.setItem('theme', 'dark');
            document.documentElement.classList.add('dark');
            metaTag.setAttribute('content', '#1b1b1b');
        }
    }, [mode]);

    return [mode, setMode];
}

export default useThemeSwitcher;
