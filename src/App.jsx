import './App.css'
import Navbar from './components/navbar/NavBar'
import Hero from './components/hero/Hero'
import Marquee from './components/marquee/Coustomers'

function App() {
  return (
    <div className="App">
      <header><Navbar/></header>
      <main>
        <Hero />
        <Marquee/>
      </main>
      <footer>Footer</footer>
    </div>
  )
}

export default App