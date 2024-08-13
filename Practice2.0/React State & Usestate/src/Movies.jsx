import React from 'react'

const Movies = () => {
    let Movie_Name= 'GOAT'
    let Hero= "Vijay Thalapathy"
     let Movie_Review= "Good for Thalapathy"
     let Dir= "VP"
     let img= `https://upload.wikimedia.org/wikipedia/en/1/1e/The_Greatest_of_All_Time.jpg`
  return (
    <div>
        <h2>Movie Cast</h2>
        <img src={img} alt=""  width="200"/>
        <hr />
        <h3>Movie Name: {Movie_Name}</h3>
        <h3>Movie Hero:{Hero}</h3>
        <h3>Movie Review: {Movie_Review}</h3>
        <h3>GOAT Dir:{Dir}</h3>
    </div>
  )
}

export default Movies