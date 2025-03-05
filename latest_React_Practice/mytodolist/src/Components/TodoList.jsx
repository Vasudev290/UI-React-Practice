import React, { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
    const [todoList, setTodoList] = useState([])
  return (
    <>
      <div className="w-[30-rem]">
        <h1 className="text-lg my-2 font-medium text-amber-500">Todo List</h1>
        <div className="flex gap-2">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Add Your Task"
              className="py-3 px-4 w-full text-sm border focus:outline-none focus:border-amber-400"
            />
          </div>
          <button className="py-3 px-4 bg-blue-500 text-white hover:bg-blue-700 rounded-md text-sm font-medium">
            Add Task
          </button>
        </div>
        <p className="my-3 text-sm text-zinc-400 px-1">Fill task details</p>
      </div>
      <div className="w-[30-rem] bg-white shadow py-6 px-4">
        <fieldset className="space-y-3">
          <legend className="text-pink-600 font-medium">
            List of tasks ✒️📝
          </legend>
          {/* Todi Item */}

        </fieldset>
      </div>
    </>
  );
};

export default TodoList;
