"use client"
import NavBar from "@/components/NavBar";
import Header from "@/components/Header";

const App:React.FC = () => {

  return (
    <div dir="rtl" className="bg-white text-gray-600 dark:bg-gray-950 h-[300vh] dark:text-gray-400 transition-all">
      <NavBar/>
      <Header/>
    </div>
  )
}

export default App;