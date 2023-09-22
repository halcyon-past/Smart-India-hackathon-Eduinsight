import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import NavBar from "./components/NavBar";
import Prediction from './components/Prediction';
import Footer from './components/Footer';
import ComingSoon from './components/ComingSoon';

function App() {

  return (
    <div className="App w-full h-screen">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/predict" element={<Prediction/>} />
          <Route path="/comingsoon" element={<ComingSoon/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
