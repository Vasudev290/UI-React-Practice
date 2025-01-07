import React, { createContext , useState} from 'react'
import BackGround from './BackGround'

export const ThemeContext = createContext()

const Color = () => {
    const [theme, setTheme] = useState('light')
    // const toggleButton = () => {
    //     setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
    // }
  return (
    <div>
        <h3>Theme Toggles</h3>
        <ThemeContext.Provider value={{theme, toggleButton: () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))}}>
            <BackGround/>
        </ThemeContext.Provider>
    </div>
  )
}

export default Color