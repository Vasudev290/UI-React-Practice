import React from 'react'
import { useParams } from 'react-router-dom'

const ContestLayout = () => {
    const contestParams = useParams()
    console.log(contestParams)
  return (
    <div>
        <h3>Contest Layout</h3>
    </div>
  )
}

export default ContestLayout