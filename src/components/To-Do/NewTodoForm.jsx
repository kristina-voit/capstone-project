import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";

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
    <NewTodoFormStyle onSubmit={handleSubmit}>
      <label htmlFor="task"></label>
      <NewTodoFormInput
        value={userInput.task}
        onChange={handleChange}
        id="task"
        type="text"
        name="task"
        placeholder="To-Do hier eingeben..."
        required
      />

      <NewTodoFormButton>Hinzufügen</NewTodoFormButton>
    </NewTodoFormStyle>
  );
}

export default NewTodoForm;

const NewTodoFormButton = styled.button`
  background: #509b9b;
  border-radius: 15px;
  border: none;
  color: #4b417a;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  height: 2rem;
  margin-left: 5px;
  margin-top: 10px;
  padding: 0 1.3rem;
`;

const NewTodoFormInput = styled.input`
  background: #f7f1f1;
  border: none;
  flex-grow: 1;
  font-family: "Montserrat", sans-serif;
  font-size: initial;
  height: 2rem;
  padding: 0 1.5em;
`;

const NewTodoFormStyle = styled.form`
  display: flex;
  flex-wrap: wrap;
  margin: auto;
`;
