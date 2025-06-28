import './App.css'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/NavBar'

function App() {
  return (
    <div className="App">
      <header><Navbar/></header>
      <main>
        <Hero />
      </main>
      <footer>Footer</footer>
    </div>
  )
}

export default App