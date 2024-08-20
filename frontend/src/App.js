import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/home'
import Realisation from './pages/realisation'
import Header from './components/Header'
import NotFound from './pages/errorpage'
import ErrorAll from './components/Errors'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/realisations" element={<Realisation />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<ErrorAll />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
export default App;
