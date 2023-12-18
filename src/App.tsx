import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import './assets/fonts/fonts.css'
import MySwiper from "./components/Swiper/MySwiper";
import Navbar from "./components/Navbar/Navbar";


function App() {


  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/React-portfolio" element={<MySwiper />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
