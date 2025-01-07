import React, { useContext } from 'react'
import {ThemeContext} from './Light'
const Dark = () => {
    const theme = useContext(ThemeContext)
  return (
    <div>
        <h3>Dark Theme</h3>
        <h4>This is the current theme color : {theme}</h4>
    </div>
  )
}

export default Dark