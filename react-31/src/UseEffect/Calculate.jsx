import React,{useEffect, useState} from 'react'

const Calculate = () => {
    const [add, setAdd] = useState(0)
    const [mul, setMul] = useState(0)
    const decrHandler = () => { //option 1
        if(add > 0) {
            setAdd(add - 1)
        }
    }
    useEffect(() => {
        setMul(add * 5)
    }, [add] )
  return (
    <div style={{alignItems: "center", justifyContent:'center', display:'flex'}}>
        <div style={{textAlign: 'center', padding: '20px', borderRadius: '10px', backgroundColor: '#fff', boxShadow: '0, 4px, 8px, rgba(0,0,0,0.1'}}>
        <h2>you are cilcked {add} times</h2>
        <button onClick={() => setAdd(add + 1)} className='btn btn-success m-2'> + </button>
        <button onClick={() => setAdd(0)} className='btn btn-info m-2'> Rest </button>
        <button onClick={() => setAdd(add > 0 ? add - 1 : 0)} className='btn btn-danger m-2'> - </button>  
        <h2>Multiplecation Value {mul}</h2>
        </div>
        
    </div>
  )
}

export default Calculate