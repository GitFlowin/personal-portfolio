import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const getInitialTheme = (): 'light' | 'dark' => {
    const stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
};

const ThemeToggle = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>(getInitialTheme);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark');
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <button
            onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
            className="fixed right-4 top-4 z-50 rounded-full border bg-card p-2 text-foreground shadow-sm transition-colors hover:bg-muted"
            aria-label="Toggle theme"
        >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
    );
};

export default ThemeToggle;
