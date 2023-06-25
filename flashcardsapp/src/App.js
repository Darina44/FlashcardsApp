import React from 'react';
import './assets/styles/App.scss';
import './assets/styles/styles.scss';
import Header from './components/Header.jsx';
import WordCard from './components/WordCard.jsx';
import Table from './components/Table';
import WordButtons from './components/WordButtons';
import words from './wordsData.js';

function App() {
  return (
    <div className="App">
      <Header />
      <WordCard />
      <WordButtons />
      {
        words.map((word) =>
          <Table key={words.id} {...word} />
        )
      }
    </div>
  );
}

export default App;
