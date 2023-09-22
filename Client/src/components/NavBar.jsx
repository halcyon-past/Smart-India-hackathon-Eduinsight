import "./NavBar.css"
import logo from "../assets/logo.png"

function NavBar() {


  
  return (
    <div className="nav h-20 flex justify-around items-center">
        <div className="logo text-[#570080] text-4xl font-bold flex items-center cursor-pointer">
            <img src={logo} alt="logo" className="h-16 w-16" />
            <div>Eduinsight</div>
        </div>
        <div className="nav-links w-5/12">
            <ul className="flex justify-around items-center">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Blog</li>
                <li>FAQ</li>
                <li>Donation</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar