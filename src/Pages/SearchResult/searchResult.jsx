import "./searchResult.css";
import { useState, useEffect } from "react";
import { API_KEY } from "./../../data.js";
import { Link, useParams } from "react-router-dom";
import SearchedVideoCard from "../../Components/SearchedVideoCard/SearchedVideoCard";

const SearchResult = () => {
  const [data, setData] = useState(null);
  const params = useParams();
  const fetchData = async () => {
    const videoList = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${params.query}&type=video&maxResults=10&order=relevance&key=${API_KEY}`;
    await fetch(videoList)
      .then((response) => response.json())
      .then((data) => setData(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="SearchResult">
      {data &&
        data.items &&
        data.items.map((item, index) => {
          return (
            <Link to={`/video/0/${item.id.videoId}`}>
              <SearchedVideoCard
                key={index}
                thumbnail={item.snippet.thumbnails.medium.url}
                title={item.snippet.title}
                videoId={item.id.videoId}
                description={item.snippet.description}
                channelName={item.snippet.channelTitle}
              />
            </Link>
          );
        })}
    </div>
  );
};

export default SearchResult;
