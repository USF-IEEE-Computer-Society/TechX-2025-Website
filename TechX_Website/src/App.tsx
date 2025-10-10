import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Schedule from './components/Schedule'
import Team from './components/sections/Team'
import NotFound from './components/NotFound'
import Navbar from './components/sections/Navbar'
import Footer from './components/sections/Footer'

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/team" element={<Team />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
        <Footer/>

    </Router>
  )
}

export default App
