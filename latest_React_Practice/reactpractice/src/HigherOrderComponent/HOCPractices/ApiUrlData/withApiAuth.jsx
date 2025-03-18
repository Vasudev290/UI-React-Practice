import React, { useEffect, useState } from 'react'

const withApiAuth = (WrappedComponent, url) => {
  return (props) => {
    const[data, setData] = useState(null);
    const[loading, setLoading] = useState(true)
    const[error, setError] = useState(null);
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setData(data);
            setLoading(false)
        })
        .catch(err => setError(err))
    }, [url])
    return loading ? <h3>loading...! 🔄</h3> : <WrappedComponent data={data} {...props}/>
  }
}

export default withApiAuth