import React,{useState,useEffect} from 'react'

const App = () => {
  const [num1,setNum1] = useState(10)
  const [num2,setNum2] = useState(100)

  useEffect(()=>{
    setNum1(20)
    console.log('From UseEffect Side..!');
    return()=>{
      setNum1(null)
      console.log("Memory Cleaned");
    };
  },[num1,num2]);
  //console.log('Value :',num1);
  

  return (
    <div>
      <button onClick={()=> setNum1((cur) => cur + 1)}>Add</button>
      {num1}
      <button onClick={()=> setNum1((cur) => cur - 1)}>Minus</button>
      <br /> <br />

      <div>
        <button onClick={()=> setNum2((cur) => cur + 1)}>Add</button>
        {num2}
      </div>
    </div>
  )
}

export default App