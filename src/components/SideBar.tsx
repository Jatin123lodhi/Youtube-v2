import { Link } from "react-router-dom";
import { useAppSelector } from "../utils/hooks";
import HomeIcon from "../assets/HomeIcon";

export const SideBar = () => {
  const isVisible = useAppSelector((store) => store.app.isSideBarOpen);

  if (isVisible == false) return;
  return (
    <div className="flex flex-col m-2 p-2 ">
      <div className="border m-2 p-2 ">
        <ul>
          <li className="p-2 hover:bg-gray-200">
            <Link to="/">
              <div className="flex items-center ">
                <div>
                  <HomeIcon />
                </div>
                <div>Home</div>
              </div>
            </Link>
          </li>
          <li className="p-2 hover:bg-gray-200">Shorts</li>
          <li className="p-2 hover:bg-gray-200">Subscriptions</li>
          <li className="p-2 hover:bg-gray-200">Originals</li>
          <li className="p-2 hover:bg-gray-200">Youtube Music</li>
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
