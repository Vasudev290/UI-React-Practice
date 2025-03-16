import React, { memo } from 'react'

const PropsManage2 = ({handleClick}) => {
  console.log("Component Re-Rendering..!")
  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default memo(PropsManage2)