import React,{useState} from 'react'

const CommentForm = () => {
    const [userCommect, setUserCommect] = useState('')

    const commectHadler = (e) => {
        setUserCommect(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("New Commects: ", userCommect)
        setUserCommect("")
    }
  return (
    <div>
        <form onSubmit={submitHandler} className='formSection'>
            <h4>Leave Your Commects</h4>
            <div className='commentInput'>
                <textarea value={userCommect} onChange={commectHadler} cols="50" rows="4"></textarea>
            </div>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default CommentForm