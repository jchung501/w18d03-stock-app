import './App.css';
import { Route, Routes} from "react-router-dom";
import About from './pages/About';
import Home from './pages/Home';
import Stock from './pages/Stock';
import Nav from './components/Nav/Nav';

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/stocks/:symbol" element={<Stock />}/>
        <Route path="/stocks" element={<Dashboard />}/>
      </Routes>
    </div>
  );
};

