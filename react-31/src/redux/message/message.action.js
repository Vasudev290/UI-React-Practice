//Action Types
let GM= 'GM'
let GA= 'GA'
let GE= 'GE'
let GN= 'GN'

//Action
let gmAction= ()=>{
    return{type:GM}
}
let gaAction= ()=>{
    return{type:GA}
}
let geAction= ()=>{
    return{type:GE}
}
let gnAction= ()=>{
    return{type:GN}
}
export {gmAction,gaAction,geAction,gnAction,GM,GA,GE,GN}