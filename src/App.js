
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import React from 'react';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Potfolio from './pages/potfolio'
import Contact from './pages/contact'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Portfolio' element={<Potfolio />}/>
          <Route path='/Contact' element={<Contact />}/>
        </Routes>
        
        <Footer />
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
