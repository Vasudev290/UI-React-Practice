import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addComments } from "../Slices/commentSlice";
const CommentForm = () => {
  const [userComments, setUserCommets] = useState("");
  const dispatch = useDispatch();

  const submitComments = (e) => {
    e.preventDefault();
    dispatch(addComments(userComments))
    console.log("User Commmets:", userComments);
    setUserCommets("")
  };
  return (
    <div>
      <form onSubmit={submitComments} className="formSection">
        <h4>Leave your commets</h4>
        <div className="commentInput">
          <textarea
            value={userComments}
            onChange={(e) => setUserCommets(e.target.value)}
            cols="50"
            rows="5"
            id=""
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CommentForm;
