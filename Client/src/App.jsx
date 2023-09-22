import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import NavBar from "./components/NavBar";

function App() {

  return (
    <div className="App w-full h-screen">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
