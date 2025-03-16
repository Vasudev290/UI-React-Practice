import { useEffect, useState } from 'react'

const useFetch = (url) => {
    const[data, setData] = useState(null)
    const[loading, setLoading] = useState(true)
    const[error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        fetch(url)
        .then((resp) => resp.json())
        .then((data) => setData(data))
        .catch((err) => setError(err))
        .finally(() => setLoading(false))
    }, [url])
  return{data, loading, error}
}

export default useFetch