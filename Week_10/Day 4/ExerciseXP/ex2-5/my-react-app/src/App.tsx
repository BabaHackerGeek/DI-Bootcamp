import React from 'react';
import Greeting from './components/Greeting';
import Counter from './components/Counter';
import UserCard from './components/UserCard';
import DataFetcher from './components/DataFetcher';

const App: React.FC = () => {
  return (
    <div>
      <h1>Combined React App with TypeScript</h1>
      <Greeting name="Alice" />
      <Counter />
      <UserCard name="John Doe" age={30} />
      <UserCard />
      <DataFetcher />
    </div>
  );
};

export default App;
