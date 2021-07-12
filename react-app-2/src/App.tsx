import React from 'react';

import Router from './Router';

interface IAppProps {
  name: string,
}

const App: React.FC<IAppProps> = ({ name }: IAppProps) => {
  return (
    <>
      <h1>{name}</h1>
      <Router />
    </>
  );
}

export default App;
