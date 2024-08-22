import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/home'
import Portfolio from './pages/portfolio'
import NotFound from './pages/errorpage'
import ErrorAll from './components/Errors'
import Presentation from './pages/presentation'
import Contact from './pages/contact'

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about_me" element={<Presentation/>}/>
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />}/>
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<ErrorAll />} />
        </Routes>
    </>
  )
}
export default App;
