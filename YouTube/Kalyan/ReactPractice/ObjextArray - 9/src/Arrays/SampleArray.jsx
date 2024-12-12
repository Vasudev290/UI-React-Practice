import React from 'react'

//let sampleArray = ["Vasu", "Arjun", 23, true, {mindset:"Silent"}]

let players = [
    {
        cricket: "Dhoni",
        tennies: "Sania",
        chess : "Anand",
        actor: "Tom Chruis"
    }
]
const SampleArray = () => {
  return (
    <div>
       {players.map((item) => {
        return(
            <div>
                <h3>My Fav Cricketer {item.cricket}</h3>
                <h3>My Fav Player in Tennies {item.tennies}</h3>
                <h3>My Fav Player in Chess {item.chess}</h3>
                <h3>My Fav Plater in actor {item.actor}</h3>
            </div>
        )
       })}
    </div>
  )
}

export default SampleArray