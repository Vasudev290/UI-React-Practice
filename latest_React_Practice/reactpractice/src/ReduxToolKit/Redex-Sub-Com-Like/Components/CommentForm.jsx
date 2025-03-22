import React, { useState } from "react";

const CommentForm = () => {
  const [userComments, setUserCommets] = useState("");
  const submitComments = (e) => {
    e.preventDefault();
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
            rows="20"
            id=""
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CommentForm;
