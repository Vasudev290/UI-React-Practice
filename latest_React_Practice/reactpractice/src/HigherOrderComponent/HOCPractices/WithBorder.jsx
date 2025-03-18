import React from 'react'

const WithBorder = (WrappedComponent) => {
  return (props) => {
    <div style={{border: "2px soild red", padding: "10px"}}>
        <WrappedComponent {...props}/>
    </div>
  }
}

const Message = ({text}) => {
    return <h2>{text}</h2>
}

const MessageWithBorder = WithBorder(Message)
export default MessageWithBorder