import logo from './logo.svg';
import './App.css';
import Home from "./Views/Home"
import Projects from './Views/Projects';
import Landing from './Views/Landing';
import AboutView from './Views/About';
import Contact from './Views/Contact';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route estrict path='/' element={<Landing />} />
        <Route estrict path='/home' element={<Home />} />
        <Route estrict path='/projects' element={<Projects />} />
        <Route estrict path='/about' element={<AboutView />} />
        <Route estrict path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
