import { useState } from 'react'

const useCounter = (inisialValue = 0) => {
    const[count, setCount] = useState(inisialValue)
    const increament = () => setCount((prev) => prev + 1)
    const decreament = () => setCount((prev) => prev ? prev - 1 : 0)
    const reset = () => setCount(0)

  return {count, increament, decreament, reset}
}

export default useCounter