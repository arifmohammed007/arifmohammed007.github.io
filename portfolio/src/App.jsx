import React from 'react'
import Header from './components/header/Header'
import Nav from './components/Nav/Nav'
import About from './components/about/About'
import Skills from './components/Skills/Skills'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
      <>
          <Header />
          <Nav />
          <About />
          <Skills />
          <Contact />
          <Footer />
      </>
  )
}

export default App