import React, { useRef, useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const inputRef = useRef();

  //Adding the New Task
  const addTasksHandler = () => {
    const inputText = inputRef.current.value.trim();
    if (inputText === "") {
      return null;
    }
    const newTodo = {
      id: Date.now(),
      text: inputText,
      isCompleted: false,
    };
    setTodoList((prevItem) => [...prevItem, newTodo]);
    inputRef.current.value = "";
  };

  //Update task Status
  const toggleTask = (id) => {
    setTodoList((prevId) => {
      return prevId.map((todo) => {
        if (id === todo.id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      });
    });
  };

  //Delete Todo Task
  const deleteTaskHandler = (id) => {
    setTodoList((prevItem) => {
      return prevItem.filter((todo) => todo.id !== id);
    });
  };
  return (
    <>
      <div className="w-[30-rem]">
        <h1 className="text-lg my-2 font-medium text-amber-500">Todo List</h1>
        <div className="flex gap-2">
          <div className="flex-1">
            <input
              ref={inputRef}
              type="text"
              placeholder="Add Your Task"
              className="py-3 px-4 w-full text-sm border focus:outline-none focus:border-amber-400"
            />
          </div>
          <button
            className="py-3 px-4 bg-blue-500 text-white hover:bg-blue-700 rounded-md text-sm font-medium"
            onClick={addTasksHandler}
          >
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
          {todoList.length === 0 ? (
            <p className="text-gray-500 text-sm">No tasks found</p>
          ) : (
            todoList.map((todo, index) => {
              return (
                <TodoItem
                  text={todo.text}
                  key={index}
                  isCompleted={todo.isCompleted}
                  id={todo.id}
                  toggleTask={toggleTask}
                  deleteTodo={deleteTaskHandler}
                />
              );
            })
          )}
        </fieldset>
      </div>
    </>
  );
};

export default TodoList;
