import { useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { hideSideBar } from "../utils/appSlice";
import { CommentContainer } from "./CommentContainer";
import { LiveChat } from "./LiveChat";
import { RealtedVideoCard } from "./RealtedVideoCard";
import { VideoPlayer } from "./VideoPlayer";
import { useAppDispatch, useAppSelector } from "../utils/hooks";

export const WatchPage = () => {
  window.scroll(0, 0);
  const location = useLocation();
  console.log(location.state)
  //params
  const [searchParams] = useSearchParams();
  
  //dispatcher
  const dispatch = useAppDispatch();

  //selector
  const results = useAppSelector((state) => state.result.results);

  useEffect(() => {
    dispatch(hideSideBar());
  }, []);

  return (
    <div className="flex">
      <div className="pl-20 ">
        <VideoPlayer param={searchParams.get("v")} />
        <CommentContainer />
      </div>
      <div>
        <div className="h-[612px] px-4 ml-6 border mr-4  bg-gray-100 rounded p-2">
          <LiveChat />
        </div>
        <div className="mx-4">
          {results.map((result) => (
            <RealtedVideoCard {...result} key={result.id.videoId} />
          ))}
        </div>
      </div>
    </div>
  );
};
