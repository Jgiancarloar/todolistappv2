import Form from "./components/Form"
import List from "./components/List"
import { TaskProvider } from "./components/TaskProvider"


function App() {

  return (
    <TaskProvider>
      <div className="bg-piel text-marron min-h-screen flex flex-col font-onest items-center p-5">
        <Form />
        <List />
      </div>
    </TaskProvider>
  )
}

export default App
