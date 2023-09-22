import "./Homepage.css"
import hero from "../assets/home-image.png"
import TrackCard from "./TrackCard"
import tracks from "../data/homepage"

function Homepage() {


  return (
    <>
    <div className="home flex">
        <div className="text-content w-6/12 flex justify-center items-center flex-col text-white">
            <div className="text w-9/12">
                <div className="text-1 text-5xl">Our Mission</div>
                <div className="text-2 my-8">
                    About the project with some brief insight about what we have built and the facilites it provides.Sed imperdiet velit sit amet porttitor malesuada. Fusce vulputate accumsan orci quis pulvinar. Nunc quam orci, pellentesque at serper et
                </div>
            </div>
            <div className="button w-9/12 flex items-center">
                <button className="btn bg-[#9880ca] hover:bg-[#6f5d98] ease-in-out duration-300 h-10 w-40">Get Started</button>
                <button className="btn bg-[#ac779d] hover:bg-[#8a597c] ease-in-out duration-300 h-10 w-40">Know More</button>
            </div>
        </div>
        <div className="image-content w-7/12 h-full" >
            <img src={hero} alt="hero" className="h-[120%] w-full" />
        </div>
    </div>
    <div className="tracks flex flex-col items-center">
        <div className="heading text-center text-4xl font-bold mt-5">Our Tracks</div>
        <div className="text-gray-500 mb-5">Lorem Ipsum is simply dummy text of the printing.</div>
        <div className="content w-full flex justify-around flex-wrap">
            {tracks.map((track, index) => {
                return <TrackCard data={track} key={index} />
            })}
        </div>
    </div>
    </>
  )
}

export default Homepage