import {Link} from "react-router-dom"
import PropTypes from 'prop-types'

function TrackCard(props) {

    const data = props.data;

  return (
    <div className="card h-[400px] w-72 m-5 mb-10 flex flex-col flex-start relative">
        <div className="img-container w-full h-40 rounded-t-[20px] overflow-hidden">
            <img className="w-full h-full ease-in-out duration-300" src={data.image} alt="img"/>
        </div>
        <div className="text">
            <div className="text-1 my-2 mx-2">{data.title}</div>
            <div className="w-full h-[1px] border-[#2b2b2b55] border-b-2 border-dashed"></div>
            <div className="content my-3 mx-2">
                {data.description}
            </div>
            <Link to={data.path} className="absolute flex justify-center items-center bg-orange-600 hover:bg-orange-700 ease-in-out duration-300 text-white w-40 h-10 rounded-full bottom-0 left-1/2 translate-x-[-50%] translate-y-[50%]">Know More</Link>
        </div>
    </div>
  )
}

TrackCard.propTypes = {
    data: PropTypes.object.isRequired
}

export default TrackCard