import React, { useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import { VideoCard } from "./VideoCard";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { makeid } from "../utils/helper";
import { useSelector } from "react-redux";

export const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [pageToken, setPageToken] = useState("");
  
  let region = useSelector((store)=>store.app.region);
  //console.log(region,' subscripbed')
  const YOUTUBE_API = YOUTUBE_VIDEO_API+'&regionCode='+region; 
  //console.log(YOUTUBE_API,'  &&&&')
  
  useEffect(() => {
    getYoutubeVideosDataOnRegionUpdate(YOUTUBE_API);
  }, [region]);

  const getYoutubeVideosDataOnRegionUpdate = async (API) => {
    const data = await fetch(API);
    const json = await data.json();
    console.log('  data:  ',json)
    setVideos(json.items);
  };
  
  // on infinite call
  const getYoutubeVideosData = async (API) => {
    //console.log(API,'  API ')
    const data = await fetch(API);
    const json = await data.json();
    setVideos((prev) => [...prev, ...json.items]);
    setPageToken(json.nextPageToken)
  };

  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => {
      window.removeEventListener("scroll", handelInfiniteScroll);
    };
  }, [pageToken]);
 

  const handelInfiniteScroll = () => {
    if (
      window.scrollY + window.innerHeight + 1 >=
      document.documentElement.scrollHeight
    ) {
      // console.log("call >>>", pageToken, "<<<<");
      // console.log("call >>>", token, "<<<<");
      getYoutubeVideosData(YOUTUBE_API + "&pageToken=" + pageToken);
    }
  };

  return (
    <div
      className=" flex flex-wrap justify-center py-2  my-2    "
      id="videoContainer"
    >
      {videos?.map((video) => (
        <Link to={"/watch?v=" + video.id} key={makeid()}>
          {" "}
          <VideoCard info={video} />
        </Link>
      ))}
      {/* <Link to={'/watch?v='+ videos[0].id} key={videos[0].id} ><VideoCard  info={videos[0]} /></Link> */}
    </div>
  );
};
