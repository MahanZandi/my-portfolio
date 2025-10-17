import Header from "@/components/Header";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Works from "@/components/Works";
import Scene3D from "@/components/Scene3D";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { routing } from "@/i18n/routing";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";

const App = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <div className="page">
      <NavBar locale={locale} />
      <Header />
      <AboutMe />
      <Skills />
      <Works />
      <div className="scene3d">
        <Scene3D />
      </div>
      <Footer />
    </div>
  );
};

export default App;
