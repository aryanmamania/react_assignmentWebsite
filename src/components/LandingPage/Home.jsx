import React,{useEffect} from 'react'
import AskedQuestions from "../LandingPage/AskedQuestions"
import CompanyCarousel from "../LandingPage/CompanyCarousel"
import Contact from "../LandingPage/contact/Contact"
import Features from "../LandingPage/features/Features"
import Footer from "../LandingPage/footer/Footer"
import GetStarted from "../LandingPage/GetStarted"
import MainContent from "../LandingPage/MainContent"
import NavBar from "../LandingPage/navbar/NavBar"
import Sections from "../LandingPage/Sections"
import TrustCounts from "../LandingPage/TrustCounts"
import { useNavigate,useLocation } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()
  const location = useLocation()
  useEffect(() => {
    window.onpopstate = e => {
      if(location?.state === "payment"){
        navigate('/')
      }
    };
  });
  return (
   
        <div>
      <NavBar />
      <div className="mt-32">
      <MainContent />
      <CompanyCarousel />
      <TrustCounts />
      <Sections />
      <Features />
      <GetStarted />
      <Contact />
      <AskedQuestions />
      <Footer />
      </div>
    </div>
  )
}
