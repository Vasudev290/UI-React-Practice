//Action type
let INCR = 'INCR'
let DECR = 'DECR'


let incrAction = () => {
    return {type : INCR}
}

let dercAction = () => {
    return {type: DECR}
}

export {incrAction, dercAction, INCR, DECR}