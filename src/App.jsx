
import { useRoutes } from 'react-router-dom'
import './index.css'
import { routes } from './routes/routes'

function App() {
  const elements = useRoutes(routes);
  return elements;
  


 
}

export default App
