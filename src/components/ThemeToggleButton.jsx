import { useEffect, useState } from 'react';

const ThemeToggleButton = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setDarkMode(document.documentElement.classList.contains('dark'));
  }, []);

  const toggleDarkMode = () => {
    document.body.style.transition = 'color 0.1s, background-color 0.3s';

    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setDarkMode(!darkMode);
  };

  return (
    <button onClick={toggleDarkMode} aria-label="Toggle dark mode" className="p-2">
      {darkMode ? '🌙' : '☀️'}
    </button>
  );
};

export default ThemeToggleButton;