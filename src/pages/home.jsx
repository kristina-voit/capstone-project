import React from 'react';
import TodoList from '../components/To-Do/TodoList.jsx'
import styled from 'styled-components';
import Header from '../components/Header/Header.jsx'
import EventsListShort from "../components/Events/EventsListShort"
import { eventsData } from "../components/Events/appointmentdata"

const Home = () =>{
  return (
    <TodoListBlock>
    <Header/>
    <div>
    <EventsListShort data={eventsData} />
      </div>
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