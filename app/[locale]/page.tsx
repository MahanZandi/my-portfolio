import Header from "@/components/Header";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Works from "@/components/Works";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Scene3D from "@/components/Scene3D";

const App: React.FC = () => {
  return (
    <div className="page">
      <Header />
      <AboutMe />
      <Skills />
      <Works />
      <div className="scene3d">
        <Scene3D />
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
