import React, { useState } from 'react'

const Products = () => {
    let [product, setProduct]=useState("Test")
  let updateHandler= (value)=> {
    setProduct(value)
  }  
  let p_I_Style= {color: "red", backgroundColor:"Black"} 
  return (
    <div style={{backgroundColor: 'silver'}}>
        <h1 style={p_I_Style}>Royal Enfiels@</h1>
        <h2 style={{color: 'white'}}>Product Name: {product}</h2>
        <img onClick={updateHandler.bind(null,"Old Royal Enfield 350")} src="https://www.royalenfield.com/content/dam/royal-enfield/bullet/colours/jet-black/jet_black_001.webp" width="400" alt="" /> 
        <img onClick={updateHandler.bind(null, "New Royal Enfield 350mm")} src="https://www.royalenfield.com/content/dam/royal-enfield/bullet/colours/new/military-silver-black/military-silver-black_00.webp" width="400" alt="" />
        <img onClick={updateHandler.bind(null, "Arjun's Bike")} src="https://www.royalenfield.com/content/dam/royal-enfield/bullet/colours/jet-black/jet_black_001.webp" width="400" alt="" />
    </div>
  )
}

export default Products