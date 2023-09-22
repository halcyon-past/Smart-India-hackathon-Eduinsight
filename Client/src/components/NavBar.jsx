import "./NavBar.css"
import {Link} from "react-router-dom"
import logo from "../assets/logo.png"

function NavBar() {


  
  return (
    <div className="nav h-20 flex justify-around items-center">
        <Link to="/" className="logo text-[#570080] text-4xl font-bold flex items-center cursor-pointer">
            <img src={logo} alt="logo" className="h-16 w-16" />
            <div to="/">Eduinsight</div>
        </Link>
        <div className="nav-links w-5/12">
            <ul className="flex justify-around items-center">
                <Link to="/">Home</Link>
                <Link to="/comingsoon">About</Link>
                <Link to="/predict">Prediction</Link>
                <Link to="/comingsoon">Forum</Link>
                <Link to="/comingsoon">FAQ</Link>
                <Link to="/comingsoon">Donation</Link>
                <Link to="/comingsoon">Contact</Link>
            </ul>
        </div>
    </div>
  )
}

export default NavBar