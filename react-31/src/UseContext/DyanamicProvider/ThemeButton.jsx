import React, { useContext } from 'react'
import {ThemeContext} from './Dayanmic'
const ThemeButton = () => {
    const {theme, toggleTheme} = useContext(ThemeContext)
  return (
    <div>
        <h3>ThemeButtons</h3>
        <p>Current Theme : {theme}</p>
        <button onClick={toggleTheme} className='btn btn-secondary'>Toggle Theme</button>
    </div>
  )
}

export default ThemeButton