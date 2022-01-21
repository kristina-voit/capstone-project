import styled from "styled-components";
import React, { useState } from "react";
import DeleteIcon from "../../images/delete.svg";
import EditIcon from "../../images/edit.svg";

function Todo({ todo, remove, update }) {
  const [isEditing, setIsEditing] = useState(false);
  const [task, setTask] = useState(todo.task);

  const handleClick = (evt) => {
    remove(evt.target.id);
  };
  const toggleFrom = () => {
    setIsEditing(!isEditing);
  };
  const handleUpdate = (evt) => {
    evt.preventDefault();
    update(todo.id, task);
    toggleFrom();
  };
  const handleChange = (evt) => {
    setTask(evt.target.value);
  };

  let result;
  if (isEditing) {
    result = (
      <TodoStyle>
        <TodoEditForm onSubmit={handleUpdate}>
          <TodoEditFormInput onChange={handleChange} value={task} type="text" />
          <TodoEditFormButton>Speichern</TodoEditFormButton>
        </TodoEditForm>
      </TodoStyle>
    );
  } else {
    result = (
      <TodoStyle>
        <li id={todo.id}>{todo.task}</li>
        <div>
          <TodoButton onClick={toggleFrom}>
            <img src={EditIcon} />
          </TodoButton>
          <TodoButton onClick={handleClick}>
            <img id={todo.id} src={DeleteIcon} />
          </TodoButton>
        </div>
      </TodoStyle>
    );
  }
  return result;
}

export default Todo;

const TodoStyle = styled.div`
  display: flex;
  
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
`;

const TodoButton = styled.button`
  border: none;
  font-size: 1em;
  background: none;
  cursor: pointer;
  color: #fff;
`;
const TodoEditForm = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const TodoEditFormInput = styled.input`
  flex-grow: 1;
  border: none;
  background: #f7f1f1;
  padding: 0 1.5em;
  font-size: initial;
  font-family: "Montserrat", sans-serif;
  height: 2rem;
`;

const TodoEditFormButton = styled.button`
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
