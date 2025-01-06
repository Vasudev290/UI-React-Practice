import React from 'react'

function A() {
    const parent = "This is parent data of A Component"
    return(
        <div>
            <h2>A - Components</h2>
            <B  value={parent}/>
        </div>
    )
}

function B({value}) {
    return(
        <div>
            <h2>B - Component</h2>
            <C value={value}/>
        </div>
    )
}
function C({value}) {
    return(
        <div>
            <h2>C - Component</h2>
            <D value={value}/>
        </div>
    )
}

function D({value}) {
    return(
        <div>
            <h2>D - Component</h2>
            <E value={value}/>
        </div>
    )
}

function E({value}) {
    return(
        <div>
            <h2>E - Component</h2>
            <h3>Finally I recevied Parent : {value}</h3>
        </div>
    )
}

export default A