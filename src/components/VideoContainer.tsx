// import { useState } from "react";
// import { YOUTUBE_VIDEO_API } from "../utils/constants";
import { VideoCard } from "./VideoCard";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { makeid } from "../utils/helper";
import { useAppDispatch, useAppSelector } from "../utils/hooks";
 
import { fetchNextPageVideos, fetchVideos } from "../utils/appSlice";
// import { useAppSelector } from "../utils/hooks";
// import { VideoData } from "../types/VideoCard";

export const VideoContainer = () => {
   

  const nextPageToken = useAppSelector(state=>state.app.nextPageToken)
  const region = useAppSelector(state=>state.app.region)
  const dispatch = useAppDispatch()

  useEffect(()=>{
    dispatch(fetchVideos(region))
  },[region])
  
  const videos = useAppSelector(state=>state.app.videos)


  useEffect(() => {
    const handelInfiniteScroll = () => {
      if (
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight
      ) {
        
        dispatch(fetchNextPageVideos({region,nextPageToken}))
      }
    };

    window.addEventListener("scroll", handelInfiniteScroll);
    return () => {
      window.removeEventListener("scroll", handelInfiniteScroll);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nextPageToken]);
 

  
  return (
    <div
      className=" flex flex-wrap justify-center py-2  my-2"
      id="videoContainer"
    >
      {videos.length===0 && <div>Loading...</div>}
      { videos?.map((video) => (
        <Link to={"/watch?v=" + video.id} key={makeid()}>
          <VideoCard {...video} />
        </Link>
      ))}
      {/* {videos.length &&  <VideoCard {...videos[0]}/>} */}
    </div>
  );
};
