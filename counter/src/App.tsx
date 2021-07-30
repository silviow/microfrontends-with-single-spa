import React, { useState } from 'react';

interface IAppProps {
  name: string,
}

const App: React.FC<IAppProps> = ({ name }: IAppProps) => {
  const [counter, updateCounter] = useState(0);

  const handleChange = (type: number) => {
    updateCounter(oldCounter => oldCounter + type);
  }

  return (
    <>
      <h1>{name}</h1>
      <h3>Counter: {counter}</h3>
      <button onClick={() => handleChange(-1)}>
        Decrement
      </button>
      <button onClick={() => handleChange(1)}>
        Increment
      </button>
    </>
  );
}

export default App;
