let CompB = (props)=>{

    return <div>
        <h2>Comp B</h2>
        <pre>{JSON.stringify(props)}</pre>
        <h2>Employee Id:{props.Employee_id}</h2>
        <h2>Employee Name:{props.Employee_Name}</h2>
        <h2>Employee Details:{props.Employee_Details}</h2>
    </div>
}
export default CompB