import React from 'react'

const ReceivedProps = ({propData}) => {
  return (
    <div>
        <h2>Received Props</h2>
        {propData.map((prop, index) => {
            return <ul key={index}>
                <li>{prop.title}</li>
                <center>
                <><img src={prop.image} style={{height: "120px", width: "100px"}} /></> <br />
                <>{prop.category}</>
                </center>
                <h6>{prop.description}</h6>
            </ul>
        })}
    </div>
  )
}

export default ReceivedProps