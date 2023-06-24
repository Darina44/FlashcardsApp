import React from 'react';
import './App.scss';
import './assets/styles/styles.scss';
import Header from './components/Header.jsx';
import WordCard from './components/WordCard.jsx';
import WordButtons from './components/WordButtons';

function App() {
  return (
    <div className="App">
      <Header />
      <WordCard />
      <WordButtons />
    </div>
  );
}

export default App;
