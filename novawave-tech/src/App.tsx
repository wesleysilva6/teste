import { Box } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import HowItWorks from './components/HowItWorks'
import Team from './components/Team'
import Contact from './components/Contact'
import CtaBanner from './components/CtaBanner'
import Footer from './components/Footer'
import FloatingActions from './components/FloatingActions'
import './styles.css'

function App() {
  return (
    <Box bg="#f7f7ff" color="#2a2a4a" minH="100vh" overflowX="hidden">
      <Navbar />
      <Hero />
      <Box className="section-divider" />
      <Products />
      <HowItWorks />
      <Team />
      <CtaBanner />
      <Contact />
      <Footer />
      <FloatingActions />
    </Box>
  )
}

export default App
