import React from "react";
import { BsFillTrashFill } from "react-icons/bs";

const TodoItem = ({ id, title, status, updateTodo, deleteTodo }) => {
  return (
    <div
      className={`${
        status ? "bg-green-400" : "bg-red-400"
      } w-[50%] rounded-xl text-white flex justify-center items-center cursor-pointer p-4`}
    > 
      <div onClick={() => updateTodo(id, title)} className="flex-1">
        <p className="text-white ">{title}</p>
      </div>
      <button onClick={() => deleteTodo(id, title)} className='text-white'>
        <BsFillTrashFill className="h-5 w-5 cursor-pointer" />
      </button>
    </div>
  );
};

export default TodoItem;
