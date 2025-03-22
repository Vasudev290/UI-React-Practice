import React, { useState } from "react";
import NewUser from "./NewUser";
import NewComments from "./NewComments";
import UserForm from "./UserForm";
import CommentForm from "./CommentForm";
import { useDispatch } from "react-redux";
import { incr } from "../Slices/likeCountSlice";

const PostDisplay = () => {
  const [showUser, setShowUser] = useState(false);
  const [showComments, setShowComments] = useState(false);

  const dispatch = useDispatch()

  const userHandler = () => {
    setShowUser(!showUser);
  };
  const commentHandler = () => {
    setShowComments(!showComments);
  };

  const likeHandler = () => {
    dispatch(incr())
  }

  return (
    <div className="postSection">
      <div className="poster">
        <div className="postImage">
          <img src="assets/i13.jpg" alt="" />
        </div>
        <div className="postButtons">
          <button onClick={userHandler}>Subscribe</button>
          <button onClick={commentHandler}>Comments</button>
          <button onClick={likeHandler}>Like</button>
        </div>
        <div className="userForm">
          {showUser && <UserForm />}
          {showComments && <CommentForm />}
        </div>
      </div>
      <div className="subSection">
        <NewUser />
        <NewComments />
      </div>
    </div>
  );
};

export default PostDisplay;
