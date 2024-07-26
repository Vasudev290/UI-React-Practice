function CompB(props){

  return<div>
    <h2>Component B</h2>
    <h3>{JSON.stringify(props)}</h3>
    <h3>Wish Message:{props.prop1}</h3>
    <h3>Type something:{props.prop2}</h3>
    <h3>Employee ID:{props.Employee_id}</h3>
    <h3>Employee Name:{props.Employee_Name}</h3>
    <h3>Message:{props.Message}</h3>
  </div>
}
export default CompB