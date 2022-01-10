import styled from "styled-components";
import React, { useState, useReducer } from "react";
import ReactDOM from "react-dom";
import { v4 as uuidv4 } from "uuid";

function NewTodoForm({ task, createTodo }) {
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      task: "",
    }
  );

  const handleChange = (evt) => {
    setUserInput({ [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const newTodo = { id: uuidv4(), task: userInput.task };
    createTodo(newTodo);
    setUserInput({ task: "" });
  };

  return (
    <NewTodoFormStyle className="NewTodoForm" onSubmit={handleSubmit}>
      <label htmlFor="task"></label>
      <NewTodoFormInput
        value={userInput.task}
        onChange={handleChange}
        id="task"
        type="text"
        name="task"
        placeholder="To-Do hier eingeben..."
      />
      <NewTodoFormButton>Hinzufügen</NewTodoFormButton>
    </NewTodoFormStyle>
  );
}

export default NewTodoForm;

const NewTodoFormStyle = styled.form`
  margin: auto;
  display: flex;
  flex-wrap: wrap;
`;

const NewTodoFormButton = styled.button`
  padding: 0 1.3rem;
  border: none;
  background: #509b9b;
  color: #4b417a;
  font-weight: bold;
  border-radius: 15px;
  margin-left: 5px;
  margin-top: 1rem;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  height: 2rem;
`;

const NewTodoFormInput = styled.input`
  flex-grow: 1;
  border: none;
  background: #f7f1f1;
  padding: 0 1.5em;
  font-size: initial;
  font-family: "Montserrat", sans-serif;
  height: 2rem;
`;
