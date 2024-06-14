import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/about'
import NotFound from './pages/NotFound'
import NavBar from './components/navBar/navBar'
import UsingSheet from './pages/usingSheet'
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/usingSheet" element={<UsingSheet />}/>
          <Route path="/about" element={<About />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
