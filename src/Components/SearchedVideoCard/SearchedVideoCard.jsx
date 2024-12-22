import "./SearchedVideoCard.css";



const SearchedVideoCard = (props) => {
    return (
        <div className="SearchedVideoCard">
            <div className="thumbnail"><img src={props.thumbnail} alt="" /></div>
            <div>
                <div className='title'>{props.title}</div>
                <div></div>
                <div>
                    <div></div>
                    <div className='channelName'>{props.channelName}</div>
                </div>
                <div className='description'>
                    {props.description}
                </div>
            </div>
        </div>
    )
}

export default SearchedVideoCard;