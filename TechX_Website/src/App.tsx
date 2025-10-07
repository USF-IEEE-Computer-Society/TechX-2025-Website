import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Schedule from './components/Schedule'
import Navbar from './components/sections/Navbar'
import Footer from './components/sections/Footer'

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schedule" element={<Schedule />} />
      </Routes>

    </Router>
  )
}

export default App
