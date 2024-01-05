import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {

  return (
    <>
      <Routes>
      <Route path="/" element={
          <>
            <Navbar />
            <Home />
          </>
        } />
      </Routes>
    </>
  )
}

export default App
