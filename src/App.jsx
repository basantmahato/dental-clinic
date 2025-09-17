
import { Route, Routes } from 'react-router-dom'
import './App.css'
import AboutUsSection from './components/AboutUsSection'
import ContactHeader from './components/ContactHeader'
import FAQAccordion from './components/FAQAccordion'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import ImageCarousel from './components/ImageCarousel'
import MapComponent from './components/MapComponent'
import NavBar from './components/NavBar'
import Services from './components/Services'
import TestimonialsGrid from './components/TestimonialsGrid'
import ContactUs from './components/ContactUs'
import AboutClinic from './components/AboutClinic'
import WhatsAppIcon from './components/WhatsAppIcon'


function App() {
  

  return (
    <>

    <ContactHeader />
    <NavBar />
    <WhatsAppIcon />

    <Routes>
    <Route path="/" element={
      <>
      <HeroSection /> 
      <ImageCarousel />
      <AboutUsSection />
      <Services />
      <TestimonialsGrid />
      <FAQAccordion />
      <MapComponent />
      </>
    } />

    <Route path="/about" element={<><AboutUsSection /> <AboutClinic /></>} />
    <Route path="/services" element={<><Services /> <FAQAccordion /> </>} />
    <Route path="/contact" element={<><ContactUs /> <MapComponent /> </>} />



    </Routes>
    
    <Footer />
    
   
    </>
  )
}

export default App
