import React, { useContext, useEffect, useRef, useState } from 'react'
import { UserContext } from './UseStateEffectRefContext'
const ReceviedProvider = () => {
    const {user, setUser} = useContext(UserContext)
    const [loading, setLoading] = useState(true)
    const inputRef = useRef(null)
    const renderCount = useRef(1)

    useEffect(() => {
        setTimeout(() => {
            setUser({name: "Vasu Dev", email: "vasu@gmail.com"});
            setLoading(false)
        }, 2000);
    },[setUser]);

    useEffect(() => {
        renderCount.current += 1;
    });

    useEffect(() => {
        if(user){
            inputRef.current.focus()
        }
    }, [user])
  return (
    <div>
        <h1>Received Provider!</h1>
        {loading ? (
            <p>loading...!</p>
        ) : (
            <div>
                <p><strong>Name :</strong>{user.name}</p>
                <p><strong>Name :</strong>{user.email}</p>
                <input type="text" ref={inputRef} placeholder='Update Your Name' />
                <p><strong>Component Renders :</strong>{renderCount.current}</p>
            </div>
        )}
    </div>
  )
}

export default ReceviedProvider