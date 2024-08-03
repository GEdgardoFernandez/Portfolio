import logo from './logo.svg';
import './App.css';
import Home from "./Views/Home"
import Projects from './Views/Projects';
import Landing from './Views/Landing';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route estrict path='/' element={<Landing />} />
        <Route estrict path='/home' element={<Home />} />
        <Route estrict path='/projects' element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
