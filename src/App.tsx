import './App.css';
import { Footer, Header } from './components';
import { CatDetails, Homepage } from './pages';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { Breed } from './types';
import { useGetBreedsQuery } from './services/catNewsApi';

function App() {
  //const { data } = useGetBreedsQuery({});

  //const breeds: Breed[] = data ?? [];

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/details/:breedId" element={<CatDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
