import React from 'react'
import { useTheme } from 'next-themes'
import ButtonAlternate from '../forms/buttons/ButtonAlternate'

const ThemeToggle = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme
  const isDarkMode = currentTheme === 'dark'
  const toggleTheme = () => (isDarkMode ? setTheme('light') : setTheme('dark'))

  return (
    <ButtonAlternate
      text={isDarkMode ? 'Dark mode 🌙' : 'Light mode ☀️'}
      action={() => toggleTheme()}
    />
  )
}

export default ThemeToggle
