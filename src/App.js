import React from 'react'
import Clients from './components/Clients'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import Services from './components/Services'
import Works from './components/Works'
import About from './components/About'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Company from './components/Company'
import Resume from './components/Resume'
import Counter from './components/Counter'
import Skills from './components/Skills'

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Skills />
      <Services />
      <Works />
      <Resume />
      <Counter />
      <Clients />
      <Company />
      <Blog />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
