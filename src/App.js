import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './myPortfolio/Home/Home';
import About from './myPortfolio/About/About';
import Contact from './myPortfolio/Contact/Contact';
import Nevbar from './myPortfolio/Nevbar/Nevbar';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/Nevbar' element={ <Nevbar /> } />
          <Route path='/About' element={ <About /> } />
          <Route path='/Contact' element={ <Contact /> } />
        </Routes >
      </BrowserRouter >
    </>
  );
}

export default App;
