import { useTheme } from 'next-themes'

const useDarkTheme = () => {
  const { systemTheme, theme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme
  const isDarkTheme = currentTheme === 'dark'

  return { isDarkTheme }
}

export default useDarkTheme
