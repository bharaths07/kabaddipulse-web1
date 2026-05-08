import { useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import SiteLayout from './components/SiteLayout.jsx'
import Contact from './pages/Contact.jsx'
import Home from './pages/Home.jsx'
import NewsUpdates from './pages/NewsUpdates.jsx'
import OurStory from './pages/OurStory.jsx'
import WhyKabaddiPulse from './pages/WhyKabaddiPulse.jsx'
import './App.css'

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation()
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  
  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <SiteLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/why-kabaddipulse" element={<WhyKabaddiPulse />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/news-updates" element={<NewsUpdates />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </SiteLayout>
    </BrowserRouter>
  )
}

export default App
