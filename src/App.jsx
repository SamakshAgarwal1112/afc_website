import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';

function App() {

  return (
    <>
      <Routes>
      <Route path="/" element={
          <>
            <Navbar />
            <Home />
            <About />
            <Projects />
          </>
        } />
      </Routes>
    </>
  )
}

export default App
