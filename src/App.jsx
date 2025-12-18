import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Letter from './pages/Letter';
import Photo from './pages/Photo';
import Tree from './pages/Tree';
import './App.css'

function App() {
  return (
    <BrowserRouter basename="/251225">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/letter" element={<Letter />} />
        <Route path="/photo" element={<Photo />} />
        <Route path="/tree" element={<Tree />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App