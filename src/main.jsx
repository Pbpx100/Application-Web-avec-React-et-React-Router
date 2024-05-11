import React from 'react'
import './assets/App.css';
import ReactDOM from 'react-dom/client'
import Homepage from './Homepage.jsx';
import Header from './components/Header.jsx';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import Location from './pages/Location';
import './index.css';
import Footer from './components/Footer.jsx';
import Error404 from './pages/Error404.jsx';
import About from './pages/About.jsx';
import './App.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="location/:locationId" element={<Location />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
)
