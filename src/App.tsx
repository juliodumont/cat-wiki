import './App.css';
import { Footer, Header } from './components';
import { CatDetails, Cats, Homepage } from './pages';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/details/:breedId" element={<CatDetails />} />
        <Route path="/topcats" element={<Cats />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
