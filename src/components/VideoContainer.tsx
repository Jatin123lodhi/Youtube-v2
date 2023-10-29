import { useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import { VideoCard } from "./VideoCard";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { makeid } from "../utils/helper";
import { useAppSelector } from "../utils/hooks";
import { VideoData } from "../types/VideoCard";

export const VideoContainer = () => {
  const [videos, setVideos] = useState<VideoData[]>([]);
  const [pageToken, setPageToken] = useState("");
  
  const region = useAppSelector((store)=>store.app.region);
  const YOUTUBE_API = YOUTUBE_VIDEO_API+'&regionCode='+region; 
  
  useEffect(() => {
    getYoutubeVideosDataOnRegionUpdate(YOUTUBE_API);
  }, [region,YOUTUBE_API]);

  const getYoutubeVideosDataOnRegionUpdate = async (API:string) => {
    const data = await fetch(API);
    const json = await data.json();
    console.log('  data:  ',json)
    setVideos(json.items);
  };
  
  // on infinite call
  const getYoutubeVideosData = async (API:string) => {
    const data = await fetch(API);
    const json = await data.json();
    setVideos((prev) => [...prev, ...json.items]);
    setPageToken(json.nextPageToken)
  };

  useEffect(() => {

    const handelInfiniteScroll = () => {
      if (
        window.scrollY + window.innerHeight + 1 >=
        document.documentElement.scrollHeight
      ) {
        getYoutubeVideosData(YOUTUBE_API + "&pageToken=" + pageToken);
      }
    };

    window.addEventListener("scroll", handelInfiniteScroll);
    return () => {
      window.removeEventListener("scroll", handelInfiniteScroll);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageToken]);
  
  return (
    <div
      className=" flex flex-wrap justify-center py-2  my-2    "
      id="videoContainer"
    >
      {videos?.map((video) => (
        <Link to={"/watch?v=" + video.id} key={makeid()}>
          <VideoCard {...video} />
        </Link>
      ))}
      {/* {videos.length &&  <VideoCard {...videos[0]}/>} */}
    </div>
  );
};
