import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { Link } from "react-router-dom";
import { IResults } from "../types/Results";
import { fetchResultsAsync } from "../utils/resultSlice";
import { useAppDispatch, useAppSelector } from "../utils/hooks";


export const Results = () => {
  const [searchParams] = useSearchParams();

  const results = useAppSelector((state) => state.result.results);

  const searchQuery = searchParams.get("search_query");
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchResultsAsync(searchQuery!));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  return (
    <div className="mt-5 m-2 p-6">
      {results?.map((result) => {
        return (
          <Link key={result.id.videoId} to={"/watch?v=" + result.id.videoId}>
            <ResultCard {...result} />
          </Link>
        );
      })}
    </div>
  );
};


export const ResultCard = (props: IResults) => {
  const { snippet } = props;
  const { channelTitle, title, thumbnails, description } = snippet;
  return (
    <div className="flex items-center p-2 border shadow-lg w-full h-52">
      <div className=" h-40  overflow-hidden rounded-lg flex items-center border border-gray-300">
        <img
          className="h-56 w-52 lg:w-full"
          src={thumbnails?.high?.url}
          alt="someImg"
        />
      </div>
      <div className="p-1 m-2 ">
        <ul>
          <li className="text-xl">{title}</li>
          <li className="text-sm text-gray-600">
            132,410 views . 2 months ago
          </li>
          <li className="mt-4 text-gray-500">
            <img
              className="w-8 h-8 rounded-full  inline mr-3 "
              src="./randomGirl.jpg"
              alt="dp"
            />
            {channelTitle}
          </li>
          <li className="text-gray-500 mt-4">{description}</li>
        </ul>
      </div>
    </div>
  );
};