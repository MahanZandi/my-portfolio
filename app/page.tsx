import ThemeToggle from "@/components/ThemeToggele/ThemeTogle";

const App = () => {
  return (
    <div dir="rtl" className="bg-gray-200 text-gray-600 dark:bg-gray-900 h-[100vh] dark:text-gray-400 transition-all">
      <div>
        <ThemeToggle/>
        <p className="p-10 text-2xl link link-underline">
          test
        </p>
        <button className="button-tags">
            Tag button
        </button>
      </div>
    </div>
  )
}

export default App;