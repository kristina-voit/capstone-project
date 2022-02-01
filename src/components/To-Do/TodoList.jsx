import React, { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";

function TodoList() {
  const [todos, setTodos] = useState([
    { id: uuidv4(), task: "OP-Bericht anfragen" },
    { id: uuidv4(), task: "Neues Rezept HNO" },
  ]);

  const create = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const remove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const update = (id, updatedTask) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const todosList = todos.map((todo) => (
    <Todo update={update} remove={remove} key={todo.id} todo={todo} />
  ));

  return (
    <TodoListStyle>
      <h1>To-Do's</h1>
      <ul>
        <TodoListUl>{todosList}</TodoListUl>
      </ul>
      <NewTodoForm createTodo={create} />
    </TodoListStyle>
  );
}

export default TodoList;

const TodoListStyle = styled.div`
  background: #f5f9f9;
  border-radius: 25px;
  border-style: none;
  color: #4b417a;
  font-family: "Montserrat", sans-serif;
  margin: 1rem;
  padding: 1rem 1rem 1rem;
  text-align: left;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const TodoListUl = styled.div`
  color: #4b417a;
  font-family: "Montserrat", sans-serif;
  margin-inline-start: -20px;
  margin-top: 1rem;
`;
