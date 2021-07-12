import React, { useState, useEffect } from 'react';
// @ts-ignore
import { listenEvent } from '@silvio/utils';

interface IAppProps {
  name: string,
}

const App: React.FC<IAppProps> = ({ name }: IAppProps) => {
  const [tasks, updateTasks] = useState([]);

  useEffect(() => {
    listenEvent('@silvio/react-app-4/todo/add-task', (event: any) => {
      updateTasks(oldTasks => [
        ...oldTasks,
        event.detail,
      ]);
    });
  }, []);

  return (
    <>
      <h1>@silvio/react-app-3</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Task</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default App;
