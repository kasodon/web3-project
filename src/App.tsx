import React from 'react'
import './App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Register from './pages/Register/Register'
import Talent from './pages/Register/Talent/Talent'
import DAO from './pages/Register/DAO/DAO'
import Creator from './pages/Register/Creator/Creator'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/register/talent" element={<Talent />} />
                <Route path="/register/dao" element={<DAO />} />
                <Route path="/register/creator" element={<Creator />} />
            </Routes>
        </Router>
    )
}

export default App
