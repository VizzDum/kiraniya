import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Kira from './pages/Kira'
import Symbols from './pages/Symbols'
import Dogma from './pages/Dogma'
import Saints from './pages/Saints'
import Holidays from './pages/Holidays'
import Temple from './pages/Temple'
import Texts from './pages/Texts'
import Contact from './pages/Contact'
import Navbar from './components/Navbar' // 🟢 Ось правильно!

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar /> {/* 🟢 Додаємо компонент меню */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kira" element={<Kira />} />
        <Route path="/symbols" element={<Symbols />} />
        <Route path="/dogma" element={<Dogma />} />
        <Route path="/saints" element={<Saints />} />
        <Route path="/holidays" element={<Holidays />} />
        <Route path="/temple" element={<Temple />} />
        <Route path="/texts" element={<Texts />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)