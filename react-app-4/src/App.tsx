import React, { useState } from 'react';
import Parcel from 'single-spa-react/parcel';
import { v4 as uuid } from 'uuid';
// @ts-ignore
import { emitEvent } from '@silvio/utils';

const App = ({ name }) => {
  const [task, updateTask] = useState('');

  const handleChange = (event: any) => {
    updateTask(event.target.value);
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();
    emitEvent('@silvio/react-app-4/todo/add-task', {
      id: uuid(),
      description: task,
    });
    updateTask('');
  }

  return (
    <>
      <h1>{name}</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={task}/>
        <button>Add</button>
      </form>
      <Parcel
        config={() => System.import('@silvio/react-app-3')}
      />
    </>
  )
}

export default App
