//ActionType
let PLUS='PLUS'
let MINUS='MINUS'
//Action 
let plusAction= ()=>{
    return{type:PLUS}
}
let minusAction= ()=>{
    return{type:MINUS}
}

export {plusAction,minusAction,PLUS,MINUS}