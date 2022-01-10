import styled from "styled-components";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import { v4 as uuidv4 } from 'uuid';

function TodoList() {
  const [todos, setTodos] = useState([
    { id: uuidv4(), task: "Überweisung Augenarzt"
  },
    { id: uuidv4(), task: "OP-Bericht anfragen "
  }
  ]);

  const create = newTodo => {
    console.log(newTodo);
    setTodos([...todos, newTodo]);
  };

  const remove = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const update = (id, updatedTask) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };



  const todosList = todos.map(todo => (
    <Todo
      update={update}
      remove={remove}
      key={todo.id}
      todo={todo}
    />
  ));

  return (
    <TodoListStyle className="TodoList">
      <h1>
        To-Do's
      </h1>
      <TodoListUl>{todosList}</TodoListUl>
      <NewTodoForm createTodo={create} />
    </TodoListStyle>
  );
}

export default TodoList;

const TodoListStyle = styled.div`
  text-align: left;
  padding: 1rem 1rem 1rem;
  max-width: 500px;
  background: #f5f9f9;
  color: #509b9b;
  border-style: solid;
  border-radius: 25px;
  border-color: white;
  margin: 1rem;
`
  
const TodoListUl = styled. div`
margin-top: 1rem;
  color: #4b417a;
  `
