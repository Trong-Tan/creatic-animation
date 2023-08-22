import { createRoot } from 'react-dom/client'
import Header from './components/Header'
import Welcome from './components/Welcome'
import AboutUs from './components/AboutUs'
import './style.css'
import OurServices from './components/OurServices'
import SectionDetail from './components/SectionDetail'
import OurWork from './components/OurWork'
import WhyUs from './components/WhyUs'
import OurClient from './components/OurClients'

function App() {
  return (
    <div className="text-xl">
      <Header className="px-12 mt-9" />
      <Welcome className="mt-46" />
      <AboutUs className="mt-70" />
      <OurServices className="mt-60" />
      <SectionDetail className="mt-36" />
      <OurWork className="mt-36 mb-28" />
      <WhyUs className="mt-28" />
      <OurClient className="mt-48" />
    </div>
  )
}

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(<App />)
