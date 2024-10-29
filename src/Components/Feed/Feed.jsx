import React, { useEffect, useState } from "react";
import "./Feed.css";
import { Link } from "react-router-dom";
import { API_KEY, value_converter } from "../../data";
import moment from "moment";

const Feed = ({ category }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const totalVideos = 1000;
    let fetchedVideos = [];
    let pageToken = "";

    while (fetchedVideos.length < totalVideos) {
      const videoListUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}${
        pageToken ? `&pageToken=${pageToken}` : ""
      }`;
      const response = await fetch(videoListUrl);
      const data = await response.json();

      fetchedVideos = [...fetchedVideos, ...data.items];

      if (data.nextPageToken) {
        pageToken = data.nextPageToken;
      } else {
        break; // Exit loop if there's no more data
      }
    }

    // Trim the array to ensure it contains exactly 1000 videos
    setData(fetchedVideos.slice(0, totalVideos));
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  return (
    <div className="feed">
      {data.map((item, index) => (
        <Link
          key={index}
          to={`video/${item.snippet.categoryId}/${item.id}`}
          className="card"
        >
          <img src={item.snippet.thumbnails.medium.url} alt="" />
          <h2>{item.snippet.title}</h2>
          <h3>{item.snippet.channelTitle}</h3>
          <p>
            {value_converter(item.statistics.viewCount)} views &bull;{" "}
            {moment(item.snippet.publishedAt).fromNow()}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default Feed;
