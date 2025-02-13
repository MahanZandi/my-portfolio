import Button from "@/components/Button/Button";

const App:React.FC = () => {
  return (
    <div dir="rtl" className="bg-gray-200 text-gray-600 dark:bg-gray-900 h-[100vh] dark:text-gray-400 transition-all p-10">
      <Button text="hello"/>
    </div>
  )
}

export default App;