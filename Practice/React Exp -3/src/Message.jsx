function Message (){
    let eid = 301
    let ename = "Arjun"
    let loc = ["Chennai","Bangalore","Hyberbad"]
    let details = {
        sal:35000,
        Avil:true
    }
    return<div>
        <h2>Message Components</h2>
        <h3>Employee Id:{eid}</h3>
        <h3>Employee Name:{ename}</h3>
        <h3>Employee location:{loc[1]}</h3>
        <h3>Employee Details:{JSON.stringify(details)}</h3>

    </div>
}
export default Message