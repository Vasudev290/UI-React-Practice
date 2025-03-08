import React, { useState } from 'react'

const InputField = () => {
    const[InputField, setInputFeild] =useState("")
    const[submit, setSubmit] =useState("")
    const submitHandler = (e) => {
        e.preventDefault()
        //alert("Submit Succeessfully!", ...InputField)
        setSubmit(InputField)
        setInputFeild(" ")
    }
  return (
    <div>
        <h3>Input Field Text</h3>
        <form onSubmit={submitHandler}>
        <input type="text" value={InputField} placeholder='Type Something ..!' onChange={(e) => setInputFeild(e.target.value)} /> <br /><br />
        <button type='submit'>Get Message</button>
        <p>Typed Message : {submit}</p>
        </form>
    </div>
  )
}

export default InputField