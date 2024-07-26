import CompB from "./CompB"
function CompA(){
  let eid=320
  let ename="Arjun"
  return<div>
    <h2>Component A</h2>
    <hr />
    <CompB prop1={"Good Morning...!"} prop2={["A", "B" ,"C"]}/>
    <CompB Employee_id={eid} Employee_Name={ename} Message={"Good Morning"}/>
    <CompB one={1} two={"Two"} Three={[1,2,3,4,5]} Four={{id: 320, Name:"Aravind"}}/>
  </div>
}
export default CompA