import React, { useState } from 'react'
import SearchBar from './components/SearchBar';
import styled from 'styled-components';

const Button = styled.button`
  padding: 10px;
  background-color: #1746c7;
  border: none;
  margin: 10px;
  color: white;
  border-radius: 20px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    opacity: .7;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const people = [
  {
    id: 'people-01',
    title: 'Nicolas'
  },
  {
    id: 'people-02',
    title: 'Manuel'
  },
  {
    id: 'people-03',
    title: 'Tomas'
  },
  {
    id: 'people-04',
    title: 'Martin'
  },
  {
    id: 'people-05',
    title: 'Andres'
  },
];

const calendar = [
  {
    id: 'calendar-01',
    title: 'Hacer tarea'
  },
  {
    id: 'calendar-02',
    title: 'Ir al gym'
  },
  {
    id: 'calendar-03',
    title: 'Dieta'
  },
  {
    id: 'calendar-04',
    title: 'Examen'
  },
  {
    id: 'calendar-05',
    title: 'Futbol'
  },
];

const emails = [
  {
    id: 'emails-01',
    title: 'Participa en la encuesta'
  },
  {
    id: 'emails-02',
    title: 'Corporativo'
  },
  {
    id: 'emails-03',
    title: 'Proximos eventos'
  },
  {
    id: 'emails-04',
    title: 'Inscripciones'
  },
  {
    id: 'emails-05',
    title: 'Campamento'
  },
]

function App() {
  const [data, setData] = useState([... people, ... calendar, ...emails]);
  const [currentOption, setCurrentOption] = useState('all');

  const handleClick = (e) => {
    const op = e.target.name;

    switch(op) {
      case 'all':
        setData([... people, ... calendar, ...emails]);
        setCurrentOption('all');
        document.querySelectorAll('button').forEach((btn)=> btn.classList.remove('active'));
        e.target.classList.add("active")
        break;

      case 'people':
          setData([... people]);
          setCurrentOption('people');
          document.querySelectorAll('button').forEach((btn)=> btn.classList.remove('active'));
          e.target.classList.add("active")
          break;

      case 'calendar':
          setData([... calendar]);
          setCurrentOption('calendar');
          document.querySelectorAll('button').forEach((btn)=> btn.classList.remove('active'));
          e.target.classList.add("active")
          break;

      case 'emails':
          setData([... emails]);
          setCurrentOption('emails');
          document.querySelectorAll('button').forEach((btn)=> btn.classList.remove('active'));
          e.target.classList.add("active")
          break;

      default:
        break;
    }
  }

  return (
    <Container>
      <div>
        <Button 
          onClick={handleClick}
          name="all"
          className='active'>All</Button>
        <Button 
          onClick={handleClick}
          name="people">People</Button>
        <Button 
          onClick={handleClick} 
          name="calendar">Calendar</Button>
        <Button 
          onClick={handleClick}
          name="emails">Emails</Button>
      </div>
      <SearchBar 
        items={data} 
      />
    </Container>
  )
}

export default App
