import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Letter from './pages/Letter';
import Photo from './pages/Photo';
import Song from './pages/Song';
import './App.css'

function App() {
  return (
    <BrowserRouter basename="/251225">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/letter" element={<Letter />} />
        <Route path="/photo" element={<Photo />} />
        <Route path="/song" element={<Song />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App