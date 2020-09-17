import React from 'react'
import Clients from './components/Clients'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import Services from './components/Services'
import Works from './components/Works'

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Services />
      <Works />
      <Clients />
      <Footer />
    </div>
  )
}

export default App
