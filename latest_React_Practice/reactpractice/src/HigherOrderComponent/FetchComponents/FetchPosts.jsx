import React from "react";
import WithData from "./WithData";

const url = "https://jsonplaceholder.typicode.com/posts";

const FetchPosts = (props) => {
  const { data, name = "User" } = props;

  return (
    <div>
      <h2>Fetch Post Data</h2>
      <h3>{name}'s Post Comments</h3>
      {data && data.length > 0 ? (
        <ul>
          {data.map((comment, index) => (
            <li key={index}>{comment.title}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default WithData(FetchPosts, url);
