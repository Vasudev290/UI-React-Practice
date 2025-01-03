import React, { useEffect } from 'react'

const Basic = () => {
    useEffect(() => {
        console.log("Componenet Mounted")
    }, [])
  return (
    <div>
        Check the Console!
    </div>
  )
}

export default Basic