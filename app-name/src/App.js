import React from 'react';
import Form from './components/Form';
import SignUpList from './components/SignUpList';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>app-name Sign-Ups</h1>
      <Form />
      <SignUpList />
    </div>
  );
}

export default App;
