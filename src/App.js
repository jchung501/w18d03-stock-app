import './App.css';
import Nav from './components/Nav/Nav';
import Main from './pages/Main';
import stockData from './stock-data'

export default function App() {
  return (
    <main>
      <div className="App">
        <Nav />
        <Main stockData={stockData} />
      </div>
    </main>
  );
};

