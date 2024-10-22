
import './App.css';
import Home from "../src/Views/Home";
import Landing from "../src/Views/Landing";
import AboutView from './Views/About';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route estrict path='/home' element={<Home />} />
        <Route path='/about' element={<AboutView />} />
      </Routes>
    </div>
  );
}

export default App;
