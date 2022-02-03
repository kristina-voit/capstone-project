import React, { useState } from 'react';
import styled from 'styled-components';
import DeleteIcon from '../../images/delete.svg';
import EditIcon from '../../images/edit.svg';

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

const TodoButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 1em;
`;

const TodoEditFormButton = styled.button`
  background: #509b9b;
  border-radius: 15px;
  border: none;
  color: #4b417a;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  height: 2rem;
  margin-left: 5px;
  margin-top: 1rem;
  padding: 0 1.3rem;
`;

const TodoEditForm = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const TodoEditFormInput = styled.input`
  background: #f7f1f1;
  border: none;
  flex-grow: 1;
  font-family: 'Montserrat', sans-serif;
  font-size: initial;
  height: 2rem;
  padding: 0 1.5em;
`;

const TodoStyle = styled.div`
  align-items: left;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
