import { useAppSelector } from "../utils/hooks";
import { AiFillHome } from "react-icons/ai";

import { ImVideoCamera as ShortsIcon } from "react-icons/im";
import { MdOndemandVideo as SubscriptionIcon } from "react-icons/md";
import { SiYoutubemusic as YoutubeMusicIcon } from "react-icons/si";
import { Link } from "react-router-dom";

export const SideBar = () => {
  const isVisible = useAppSelector((store) => store.app.isSideBarOpen);

  if (isVisible == false) return;

  return (
    <div className="flex flex-col m-2 p-2 ">
      <div className="border m-2 p-2 ">
        <ul>
          <li className="p-2 hover:bg-gray-200">
            <Link to="/">
              <div className="flex gap-2 items-center ">
                <div>
                  <AiFillHome />
                </div>
                <div>Home</div>
              </div>
            </Link>
          </li>
          <li className="p-2 hover:bg-gray-200">
            <div className="flex gap-2 items-center ">
              <div>
                <ShortsIcon />
              </div>
              <div>Shorts</div>
            </div>
          </li>
          <li className="p-2 hover:bg-gray-200">
            <div className="flex gap-2 items-center ">
              <div>
                <SubscriptionIcon />
              </div>
              <div>Subscriptions</div>
            </div>
          </li>

          <li className="p-2 hover:bg-gray-200">
            <div className="flex gap-2 items-center ">
              <div>
                <YoutubeMusicIcon />
              </div>
              <div className="shrink-0">Youtube Music</div>
            </div>
          </li>
        </ul>
      </div>
      <div className="border m-2 p-2">
        <ul>
          <li className="p-2 hover:bg-gray-200">Library</li>
          <li className="p-2 hover:bg-gray-200">History</li>
          <li className="p-2 hover:bg-gray-200">Your videos</li>
          <li className="p-2 hover:bg-gray-200">Watch later</li>
          <li className="p-2 hover:bg-gray-200">Downloads</li>
          <li className="p-2 hover:bg-gray-200">Liked videos</li>
          <li className="p-2 hover:bg-gray-200">Downloads</li>
        </ul>
      </div>
      <div className="border m-2 p-2">
        <ul>
          <li className="p-2 hover:bg-gray-200">Trending</li>
          <li className="p-2 hover:bg-gray-200">Music</li>
          <li className="p-2 hover:bg-gray-200">Movies</li>
          <li className="p-2 hover:bg-gray-200">Live</li>
          <li className="p-2 hover:bg-gray-200">Gaming</li>
          <li className="p-2 hover:bg-gray-200">News</li>
          <li className="p-2 hover:bg-gray-200">Sports</li>
        </ul>
      </div>
      <div className="border m-2 p-2">
        <ul>
          <li className="p-2 hover:bg-gray-200">Trending</li>
          <li className="p-2 hover:bg-gray-200">Music</li>
          <li className="p-2 hover:bg-gray-200">Movies</li>
          <li className="p-2 hover:bg-gray-200">Live</li>
          <li className="p-2 hover:bg-gray-200">Gaming</li>
          <li className="p-2 hover:bg-gray-200">News</li>
          <li className="p-2 hover:bg-gray-200">Sports</li>
        </ul>
      </div>
    </div>
  );
};
