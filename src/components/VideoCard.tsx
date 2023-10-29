import { VideoData } from "../types/VideoCard";
import { useState, useEffect, useRef } from "react";
export const VideoCard = (props: VideoData) => {
  const { snippet, statistics } = props;
  const { channelTitle, title, thumbnails } = snippet;
  const { viewCount } = statistics;
  
  //state
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(false);

  //refs
  const videoRef = useRef<HTMLVideoElement>(null);

  let views: string | number = Number(viewCount);
  if (views > 1000000) {
    views = views / 1000000;
    views = views.toFixed(2);
    views += "M";
  } else if (views > 1000) {
    views = views / 1000;
    views = views.toFixed(2);
    views += "K";
  }

  useEffect(() => {
    if (videoRef.current == null) return;

    if (isVideoPlaying) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [isVideoPlaying]);
   
  return (
    <div
      className="my-1 mx-2 w-72 h-64"
      onMouseOut={() => setIsVideoPlaying(false)}
      onMouseEnter={() => setIsVideoPlaying(true)}
    >
      <ul>
        <li className=" h-40 overflow-hidden rounded-lg flex items-center relative">
          <img className={`h-56 `} src={thumbnails.high.url} alt="videoImg" />
          <video
            className={`absolute inset-0 transition-opacity duration-200 ${isVideoPlaying ? "opacity-100 delay-200": "opacity-0"}`}
            width={"100%"}
            height={"100%"}
            src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
            ref={videoRef}
            muted
            playsInline
          />


          <div className="bg-black text-white absolute rounded right-1 bottom-1 px-1 text-sm">
            11:40
          </div>
        </li>

        {/* card bottom info */}
        <li className="py-2 ml-2">
          <div className="flex">
            <div className="">
              <img
                className="w-8 h-8 rounded-full mr-3 "
                src={thumbnails.high.url} // we don't have data for this
                alt="dp"
              />
            </div>
            <div className="shrink-[3]">
              <ul>
                <li className="text-sm text-gray-900 font-medium line-clamp-2">
                  {title}
                </li>
                <li className="text-sm text-gray-600 ">{channelTitle}</li>
                <li className="text-sm text-gray-600 ">{views} views</li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};
