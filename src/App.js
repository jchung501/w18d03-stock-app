import './App.css';
import { Route, Routes } from "react-router-dom";
import About from './pages/About';
import Stock from './pages/Stock';
import Nav from './components/Nav/Nav';
import Dashboard from './pages/Dashboard';

export default function App() {
  return (
    <main>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Dashboard />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/stocks/:symbol" element={<Stock />}/>
          <Route path="/stocks" element={<Dashboard />}/>
        </Routes>
      </div>
    </main>
  );
};

