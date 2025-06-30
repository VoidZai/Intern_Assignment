import './App.css'
import Navbar from './components/navbar/NavBar'
import Hero from './components/hero/Hero'
import Marquee from './components/marquee/Coustomers'
import TitleBlock1 from './components/titleblocks/TitleBlock1'
import ListSection1 from './components/listsections/ListSection1'

function App() {
  return (
    <div className="App">
      <header><Navbar/></header>
      <main>
        <Hero />
        <Marquee/>
        <TitleBlock1/>
        <ListSection1/>
      </main>
      <footer>Footer</footer>
    </div>
  )
}

export default App