import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { hideSideBar } from "../utils/appSlice";
import { CommentContainer } from "./CommentContainer";
import { LiveChat } from "./LiveChat";
import { RealtedVideoCard } from "./RealtedVideoCard";
import { VideoPlayer } from "./VideoPlayer";

export const WatchPage = () => {
  // to id comming from url useParam
  window.scroll(0, 0);
  const [searchParams] = useSearchParams();
  //console.log(searchParams.get("v"));

  //we have to dispatch an action so that side  collapses
  const dispatch = useDispatch();
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
        <RealtedVideoCard />
        <RealtedVideoCard />
        <RealtedVideoCard />
        <RealtedVideoCard />
        <RealtedVideoCard />
        <RealtedVideoCard />
        <RealtedVideoCard />
        <RealtedVideoCard />
        <RealtedVideoCard />
      </div>
      </div>
    </div>
  );
};
