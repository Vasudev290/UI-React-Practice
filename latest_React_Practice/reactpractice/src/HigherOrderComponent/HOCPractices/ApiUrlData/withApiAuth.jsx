import React, { useEffect, useState } from 'react'

const withApiAuth = (WrappedComponent, url) => {
  return (props) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setData(data);
            setLoading(false)
        })
    }, [url])
    return loading ? <h3>Loadingg..! 🔃🔃</h3> : <WrappedComponent data={data} {...props}/>
  }
}

export default withApiAuth