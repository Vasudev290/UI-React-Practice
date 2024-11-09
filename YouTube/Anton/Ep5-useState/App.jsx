import React,{useState} from 'react'


const App = () => {
  const [num,setNum] = useState(1);  //useState Hook

  //let x=1
  const addHandler = () => {
    /* x = x+=1 //x++, x= x + 1
    console.log("Value :", x); */ //AFter click the buttom console lvl value was increseing but display lvl not;
    setNum((currentValue)=>{
      return currentValue + 1
    });
  };
  const minusHandler = () => {
    setNum((currentValue)=>{
      return currentValue - 1
    })
  }

  console.log(num);
  

return <div>
   
    <button onClick={addHandler}>Add</button> {num} <button onClick={minusHandler}>Mins</button>{/* EventListner */} 
</div>
}

export default App