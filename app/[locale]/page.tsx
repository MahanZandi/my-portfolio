import Header from "@/components/Header";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Works from "@/components/Works";
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
    </div>
  );
};

export default App;
