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
import { TerminalLine } from "@/components/ui/Terminal";
import Terminal from "@/components/ui/Terminal";

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
      <div dir="ltr" className="container flex gap-6">
        {/* TODO create a section in place */}
      {/* <Terminal className="max-w-[800px] mx-auto">
        <TerminalLine text="> Front-End Developer specializing in modern web technologies" delay={0} />
        <TerminalLine text="> Building high-performance applications with React, Next.js & TypeScript" delay={1500} />
        <TerminalLine text="> Crafting seamless user experiences with clean, scalable code" delay={3000} />
        <TerminalLine text="> Passionate about responsive design and modern UI/UX principles" delay={4500} />
        <TerminalLine text="> Experienced in state management, API integration & performance optimization" delay={6000} />
        <TerminalLine text="> Always learning and exploring new technologies to deliver better solutions" delay={7500} />
      </Terminal> */}
      </div>
      <Works />
      <div className="scene3d">
        <Scene3D />
      </div>
      <Footer />
    </div>
  );
};

export default App;
