import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Portfolio from '../pages/Portfolio'
import About from '../pages/About'
import Contact from '../pages/Contact'
import ProtfolioDetail from '../components/PortfolioDetail'

const AppRouter: React.FC = () => {
  return (
    <div>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio/:serviceId/:workId" element={<ProtfolioDetail/>}/>
        
     </Routes>
    </div>
  )
}

export default AppRouter
