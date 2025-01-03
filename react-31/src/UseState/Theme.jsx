import React, {useState} from 'react'

const Theme = () => {
    const [theme, setTheme] = useState('light')
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
        <p>Current Theme :{theme}</p>
        <button onClick={toggleTheme} className='btn btn-dark'>Toggle Theme</button>
    </div>
  )
}

export default Theme