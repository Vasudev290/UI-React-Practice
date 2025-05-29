import { useState } from "react";

const User = (props) => {
    const {name, loc, email} = props;

    const [count, setCount] = useState(0)
    const [count1, setCount1] = useState(10)
    return <div className="user-card">
        <h2>Count Value: {count}</h2>
        <button onClick={() => {setCount(count + 1)}}>Incr</button>
        <h2>Count Value2: {count1}</h2>
        <h2>Name: {name}</h2>
        <h3>Location: {loc}</h3>
        <h2>Contact: {email}</h2>
    </div>
}
export default User;