import './App.css'
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Doughnuts from './pages/Doughnuts'
import Wholesale from './pages/Wholesale'
import Contact from './pages/Contact'

function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/doughnuts" element={<Doughnuts/>}/>
          <Route path="/wholesale" element={<Wholesale/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
