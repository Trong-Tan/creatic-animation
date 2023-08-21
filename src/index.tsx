import { createRoot } from 'react-dom/client'
import Header from './components/Header'
import Welcome from './components/Welcome'
import AboutUs from './components/AboutUs'
import './style.css'

function App() {
  return (
    <div className="text-xl">
      <Header className="px-70 mt-9" />
      <Welcome className="mt-46" />
      <AboutUs className="mt-70" />
    </div>
  )
}

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(<App />)
