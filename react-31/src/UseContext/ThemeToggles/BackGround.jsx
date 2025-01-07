import React, { useContext } from 'react'
import {ThemeContext} from './Color'

const BackGround = () => {
    const {theme, toggleButton} = useContext(ThemeContext)
  return (
    <div style={{backgroundColor: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff', padding: '20px'}}>
        <h3>BackGround Color</h3>
        <h3>Current Theme : {theme}</h3>
        <button onClick={toggleButton} className='btn btn-dark'>Toogle Theme</button>
    </div>
  )
}

export default BackGround