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
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="text-xl font-pops overflow-x-hidden">
      {/* Màn của tấn chỉ là xl
      Màn của a sơn 2xl
      */}
      <Header className=" mt-9" />
      <Welcome className="mt-20 lg:mt-46" />
      <AboutUs className="mt-20 md:mt-48 lg:mt-70" />
      <OurServices className="mt-20 md:mt-48 lg:mt-60" />
      <SectionDetail className="mt-36" />
      <OurWork className="mt-36 mb-28" />
      <WhyUs className="mt-28" />
      <OurClient className="mt-20 lg:mt-48" />
      <Contact />
      <Footer className="mt-32" />
    </div>
  )
}

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(<App />)
