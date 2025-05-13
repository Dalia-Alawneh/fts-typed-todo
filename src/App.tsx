import { Toaster } from 'react-hot-toast'
import Home from './pages/Home'
import { TodosProvider } from './context/TodoContext'

function App() {
  return (
    <TodosProvider>
      <Toaster />
      <Home />
    </TodosProvider>
  )
}

export default App
