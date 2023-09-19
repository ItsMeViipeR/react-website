import React from 'react';
import './styles/App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="card-container">
            <Card imageURL={"https://avatars.githubusercontent.com/u/71552277?v=4"} />
            <Card imageURL={"https://avatars.githubusercontent.com/u/71552277?v=4"} />
            <Card imageURL={"https://avatars.githubusercontent.com/u/71552277?v=4"} />
        </div>
      </header>
    </div>
  );
}

export default App;