import { useState } from "react";

const User = (props) => {
  const { name, loc, email } = props;

  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(10);
  return (
    <div className="p-2 border border-black">
      <h2 className="text-lg font-bold">Count Value: {count}</h2>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-md mt-2"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Incr
      </button>
      <h2 className="text-lg font-bold mt-2">Count Value2: {count1}</h2>
      <h2 className="text-lg font-bold mt-2">Name: {name}</h2>
      <h3 className="text-base text-gray-700">Location: {loc}</h3>
      <h2 className="text-lg font-bold mt-2">Contact: {email}</h2>
    </div>
  );
};
export default User;