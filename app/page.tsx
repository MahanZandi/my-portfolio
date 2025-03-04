"use client"
import NavBar from "@/components/NavBar";
import Header from "@/components/Header";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Works from "@/components/Works";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Slider from "@/components/Slider";

const App:React.FC = () => {

  return (
    <div dir="rtl" className="bg-white text-gray-600 dark:bg-gray-950  dark:text-gray-300 transition-all">
      <NavBar/>
      <Header/>
      <AboutMe/>
      <Skills/>
      <Works/>
      <Slider/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App;