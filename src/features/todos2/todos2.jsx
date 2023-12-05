import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTodo, deleteTodo, editTodo } from "./todosSlice2";


const Todos2 = () => {
    const todosList2 = useSelector((state) => state.todos2.value);
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState("");
  const [editId, setEditId] = useState(null);

  
    function handleChange(e) {
      setInputValue(e.target.value);
    }
  
    function handleAdd() {
      if (!inputValue) {
        return;
      }
      dispatch(addTodo({ text: inputValue, id: uuidv4() }));
      setInputValue("");
    }

    function handleDelete(id) {
        dispatch(deleteTodo(id))
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
        <input type="text" value={inputValue} onChange={(e) => handleChange(e)} />
        {editId ? (
        <button onClick={() => handleSave(editId)}>Save</button>
      ) : (
        <button onClick={handleAdd}>Add Todo</button>
      )}

  
        <div>
          {todosList2.map((item) => (
            <ul key={item.id}>
              <li>{item.text}</li>
              <button onClick={()=>handleDelete(item.id)}>delete</button>
              <button onClick={() => handleEdit(item)}>Edit</button>

            </ul>
          ))}
        </div>
      </>
    );
  };

export default Todos2;
