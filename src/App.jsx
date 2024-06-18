import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/About'
import NotFound from './pages/not-found/NotFound'
import NavBar from './components/navBar/navBar'
import UsingSheet from './pages/using-sheet/usingSheet'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/usingSheet/:id" element={<UsingSheet />}/>
          <Route path="/about" element={<About />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
