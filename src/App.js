import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import data from './data'
import Hero from './components/Hero'

function App() {
  // const cards = <Card />

  return (
    <div className="app">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
