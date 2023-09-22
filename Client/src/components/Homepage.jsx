import { Link } from "react-router-dom"
import "./Homepage.css"
import hero from "../assets/home-image.png"
import TrackCard from "./TrackCard"
import CommentBox from "./CommentBox"
import {tracks,comments} from "../data/homepage"
import Cap from "../assets/Cap.svg"
import Search from "../assets/Search.svg"

function Homepage() {


  return (
    <>
    <div className="home flex">
        <div className="text-content w-6/12 flex justify-center items-center flex-col text-white">
            <div className="text w-9/12">
                <div className="text-1 text-5xl">Our Mission</div>
                <div className="text-2 my-8">
                    This is a platform where we provide a solution to the problem of students dropping out of school due to many problems. We provide a platform where students can get financial help from donors and also get career guidance from mentors. We also have a forum for anonymous discussion where students can discuss their problems and get help from mentors and other students.
                </div>
            </div>
            <div className="button w-9/12 flex items-center">
                <Link to="/predict" className="btn flex justify-center items-center bg-[#9880ca] hover:bg-[#6f5d98] ease-in-out duration-300 h-10 w-40">Get Started</Link>
                <Link t0="/comingsoon" className="btn flex justify-center items-center bg-[#ac779d] hover:bg-[#8a597c] ease-in-out duration-300 h-10 w-40">Know More</Link>
            </div>
        </div>
        <div className="image-content w-7/12 h-full" >
            <img src={hero} alt="hero" className="h-[120%] w-full" />
        </div>
    </div>
    <div className="layout w-full relative overflow-hidden">
        <div className="blob-1 absolute bg-[#570080] opacity-20 top-1/2 left-0 rounded-full translate-y-[-50%] translate-x-[-50%] blur-[127px] w-[800px] h-[800px]"></div>
        <div className="blob-2 absolute bg-[#570080] opacity-20 top-1/2 right-0 rounded-full translate-y-[-50%] translate-x-1/2 blur-[127px] w-[800px] h-[800px]"></div>
        <div className="tracks flex flex-col items-center">
            <div className="heading text-center text-4xl font-bold mt-5">Our Tracks</div>
            <div className="text-gray-500 mb-5">Take a look at the services we offer.</div>
            <div className="content w-full flex justify-around flex-wrap h-[33rem] overflow-y-scroll">
                {tracks.map((track, index) => {
                    return <TrackCard data={track} key={index} />
                })}
            </div>
        </div>
        <div className="stories tracks flex flex-col items-center">
            <div className="title w-full flex justify-between items-center h-40">
                <img src={Cap} alt="cap" className="h-full ml-2" />
                <div className="header flex flex-col items-center">
                    <div className="heading text-center text-4xl font-bold mt-5">Hear Our Success Stories</div>
                    <div className="text-gray-500 mb-5">Read what professionals has to say about us.</div>
                </div>
                <img src={Search} alt="cap" className="h-full " />
            </div>
            <div className="comments w-full h-[30rem] flex justify-around items-center">
                {
                    comments.map((comment,index)=>{
                        return <CommentBox data={comment} key={index} />
                    })
                }
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Homepage