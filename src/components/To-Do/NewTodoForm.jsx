import styled from "styled-components";
import React, { useState, useReducer } from "react";
import ReactDOM from "react-dom";
import { v4 as uuidv4 } from 'uuid'
import "./newTodoForm.css";

function NewTodoForm({ task, createTodo }) {
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      task: ""
    }
  );

  const handleChange = evt => {
    setUserInput({ [evt.target.name]: evt.target.value });
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const newTodo = { id: uuidv4(), task: userInput.task,
    };
    createTodo(newTodo);
    setUserInput({ task: "" });
  };

  return (
    <form className="NewTodoForm" onSubmit={handleSubmit}>
      <label htmlFor="task"></label>
      <input
        value={userInput.task}
        onChange={handleChange}
        id="task"
        type="text"
        name="task"
        placeholder="To-Do hier eingeben..."
      />
      <button>Hinzufügen</button>
    </form>
  );
}

export default NewTodoForm;
