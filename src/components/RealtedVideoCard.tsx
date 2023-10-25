import { IResults } from "../types/Results";


export const RealtedVideoCard = (props:IResults) => {
  const { snippet } = props;
  const { channelTitle, title, thumbnails, description } = snippet;
  return (
    <div className="flex items-center p-2 border m-1 shadow-lg w-full h-52">
      <div className=" h-40  overflow-hidden rounded-lg flex items-center ">
        <img
          className="w-60 h-40"
          src={thumbnails?.high?.url}
          alt="someImg"
        />
      </div>
      <div className="p-1 m-1  w-3/5">
        <ul>
          <li className="text-xl line-clamp-1">{title}</li>
          <li className="text-sm text-gray-600">
            132,410 views . 2 months ago
          </li>
          <li className="mt-4 text-gray-500">
            <img
              className="w-8 h-8 rounded-full  inline mr-3 "
              src={thumbnails?.high?.url}
              alt="dp"
            />
            {channelTitle}
          </li>
          <li className="text-gray-500 mt-4 line-clamp-2">{description }</li>
        </ul>
      </div>
    </div>
  );
};
