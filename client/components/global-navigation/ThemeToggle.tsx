import React from 'react'
import { useTheme } from 'next-themes'

const ThemeToggle = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme
  const isDarkMode = currentTheme === 'dark'
  const toggleTheme = () => (isDarkMode ? setTheme('light') : setTheme('dark'))

  return (
    <button
      onClick={toggleTheme}
      className={`bg-amber-200 hover:bg-amber-300 ml-4 0 px-4 py-2 transition-all duration-150 ease-in-out text-gray-700
      dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-800`}
    >
      {isDarkMode ? 'Dark mode 🌙' : 'Light mode ☀️'}
    </button>
  )
}

export default ThemeToggle
