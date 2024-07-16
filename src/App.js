import React from 'react';
import UserTable from './components/UserTable';
import './App.css';


const App = () => {
  return (
    <div className="App">
      <h1>Таблица пользователей:</h1>
      <UserTable />
    </div>
  );
};

export default App;
