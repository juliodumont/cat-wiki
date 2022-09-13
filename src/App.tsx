import './App.css';
import { Footer, Header } from './components';
import { CatDetails, Homepage } from './pages';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/details/:catId" element={<CatDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
