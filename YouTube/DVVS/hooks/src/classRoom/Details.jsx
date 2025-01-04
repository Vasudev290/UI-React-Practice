import React from 'react'

const Details = () => {
  return (
    <div>
        <h3>Login Form</h3>
        <form>
        <label >Email Id::::</label>
                <input type="text" /> <br />
                <label >Password:</label>
                <input type="password" /> <br />
                <input type="checkbox" /> Please Accept T&C <br />
                <input type="submit" value="Login" disabled/>

        </form>
    </div>
  )
}

export default Details