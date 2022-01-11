import React from 'react';
import TodoList from '../components/To-Do/TodoList.jsx'
import styled from 'styled-components';

const Home = () =>{
  return (
    <TodoListBlock>
      <h3>Home</h3>
      <div>
        <TodoList />
      </div>
    </TodoListBlock>
  );
}
export default Home;

const TodoListBlock = styled.div`
  text-align: center;
`