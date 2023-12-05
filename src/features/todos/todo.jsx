import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, editTodo } from "./todoSlice";
import { v4 as uuidv4 } from "uuid";

const Todo = () => {
  const todo = useSelector((state) => state.todos.value);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const [editId, setEditId] = useState(null);

  function addTodoComponents() {
    console.log("Salam");
    if (!inputValue) {
      return;
    }
    dispatch(addTodo({ text: inputValue, id: uuidv4() }));
    setInputValue("");
  }

  function handleDelete(id) {
    dispatch(deleteTodo({ id }));
  }

  function handleEdit(todo) {
    setInputValue(todo.text );
    setEditId(todo.id);
  }

  function handleSave(id) {
    if (!inputValue) {
      return;
    }
    dispatch(editTodo({ id: id, text: inputValue }));
    setInputValue("");
    setEditId(null);
  }

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      {editId ? (
        <button onClick={() => handleSave(editId)}>Save</button>
      ) : (
        <button onClick={addTodoComponents}>Add Todo</button>
      )}

      <div>
        {todo.map((item) => (
          <div key={item.id}>
            <h1>{item.text}</h1>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
            <button onClick={() => handleEdit(item)}>Edit</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Todo;
