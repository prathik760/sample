import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Possible from './assets/Components/Possible.jsx'
import Card from './assets/Components/Card.jsx'
import TestimonialSection from './assets/Components/Test.jsx'
import SkillSection from './assets/Components/Design.jsx'
import Imagelog from './assets/Components/Imagelog.jsx'
import CounterSection from './assets/Components/Count.jsx'
import TeamSection from './assets/Components/Team.jsx'
import Product from './assets/Components/Product.jsx'
import Clients from './assets/Components/Clients.jsx'
import Simple from './assets/Components/Simple.jsx'
import Footer from './assets/Components/Footer.jsx'
 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Possible />
    <Card />
    <TestimonialSection />
    <SkillSection />
    <Imagelog />
    <CounterSection />
    <TeamSection />
    <Product />
    <Clients />
    <Simple />
    <Footer />
  </StrictMode>,
)
