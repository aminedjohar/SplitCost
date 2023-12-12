import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/landingPage';
import Faq from './pages/faq';
import Contact from './pages/Contact';
import Example from './pages/Example';
import About from './pages/About';
import NoPage from './pages/noPage';
import NewEvent from './pages/newEvent';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/faq" element={<Faq /> } />
        <Route path="/contact" element={<Contact />} />
        <Route path="/example" element={<Example />} />
        <Route path="/about" element={<About />} />
        <Route path="/new" element={<NewEvent />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
