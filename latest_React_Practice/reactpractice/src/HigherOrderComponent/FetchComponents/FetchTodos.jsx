import React from "react";
import WithData from "./WithData";

const url = "https://jsonplaceholder.typicode.com/todos";

const FetchTodos = (props) => {
  const { data, name } = props;

  return (
    <div>
      <h2>Fetch Todo Data</h2>
      <h3>{name}'s Todos List</h3>
      {data && data.length > 0 ? (
        <ul>
          {data.map((todo, index) => (
            <li key={index}>{todo.title}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default WithData(FetchTodos, url);
