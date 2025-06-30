import './App.css'
import Navbar from './components/navbar/NavBar'
import Hero from './components/hero/Hero'
import Marquee from './components/marquee/Coustomers'
import TitleBlock1 from './components/titleblocks/TitleBlock1'
import ListSection1 from './components/listsections/ListSection1'
import TitleBlock2 from './components/titleblocks/TitleBlock2'
import ListSection2 from './components/listsections/ListSection2'
import FAQ from './components/faq/FaqSection'
import PreFooter from './components/footer/prefooter/PreFooter'
import Footer from './components/footer/Footer/Footer'

function App() {
  return (
    <div className="App">
      <main>
      <Navbar/>
        <Hero />
        <Marquee/>
        <TitleBlock1/>
        <ListSection1/>
        <TitleBlock2/>
        <ListSection2/>
        <FAQ/>
        <PreFooter/>
      </main>
      <footer>  <Footer/>    </footer>
    </div>
  )
}

export default App