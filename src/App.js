import React from 'react';
import { Header } from './components/Header';
import { WildPokemon } from './components/WildPokemon';
import { Pokedex } from './components/Pokedex';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <WildPokemon />
      <Pokedex />
    </div>
  );
}

export default App;
