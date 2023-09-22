import PropTypes from 'prop-types'

function CommentBox(props) {

    const data = props.data;

  return (
    <div className="comment h-[250px] w-[400px] bg-slate-200 flex flex-col justify-between rounded-lg">
        <div className="comment-box m-5">
            {"“"+data.comment+"”"}
        </div>
        <div className="user m-5 flex items-center">
            <div className="user-image h-12 w-12 overflow-hidden rounded-full">
                <img src={data.image} alt="user" />
            </div>
            <div className="user-name mx-3">
                <div className="name">{data.name}</div>
                <div className="designation">{data.designation}</div>
            </div>
        </div>
    </div>
  )
}

CommentBox.propTypes = {
    data: PropTypes.object.isRequired
}


export default CommentBox