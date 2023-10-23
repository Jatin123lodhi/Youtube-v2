import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { changeRegion, toggleSideBar } from "../utils/appSlice";
import { logo, SEARCH_SUGGEST_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { useAppDispatch, useAppSelector } from "../utils/hooks";
import SearchSVG from "../assets/SearchSVG";
import HamIcon from "../assets/HamIcon";
import UserIcon from "../assets/UserIcon";



export const Header = () => {
  const [searchQuery, setsearchQuery] = useState<string>("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const dispatch = useAppDispatch();
  const searchCache = useAppSelector((store) => store.search);
  const navigate = useNavigate();
  useEffect(() => {
    //we have to make this call after 200ms
    const i = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        if(searchQuery.length>=3)
        getSearchResults();
      }
    }, 200);
    return () => clearTimeout(i);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  const getSearchResults = async () => {
    console.log('caledf',searchQuery)
    const data = await fetch(SEARCH_SUGGEST_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    const obj = {
      [searchQuery]: json[1],
    };
    dispatch(cacheResults(obj));
  };

  const handelSideBar = () => {
    console.log("clicked");
    dispatch(toggleSideBar());
  };
  window.addEventListener("click",   ()=> {
    setShowSuggestion(false)
  });
  return (
    <div className="flex border  shadow-sm  items-center justify-between">
      {/* left part */}
      <div className="flex items-center">
        <button onClick={() => handelSideBar()} className="my-2 ml-2 mr-1 p-2 ">
          <HamIcon/>
        </button>

        <a href="/" className="flex items-center font-sans">
          <img className="p-2 my-2 w-16" src={logo} alt="youtube icon" />
          <span className="text-2xl  ">Youtube </span>
        </a>
        
      </div>
      {/* middle section */}
      <form
        className="relative"
        onSubmit={(e) => {
          e.preventDefault();
          navigate("/results?search_query=" + searchQuery);
        }}
      >
        <div className="flex item-center">
          <input
            id="search_input"
            className="border border-gray-300 rounded-l-full  p-2 pl-4 md:w-96 lg:w-[34rem] search_input"
            type="text"
            placeholder="Search"
            autoComplete="off"
            value={searchQuery}
            onChange={(e) => {
              setsearchQuery(e.target.value);
              setShowSuggestion(true);
            }}
          />
          {/* search btn with 🔍 icon */}
          <button className=" bg-gray-200  border border-gray-300 rounded-r-full  w-14 pl-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </div>
        {/* the div which shows up on focus of input field */}
        {suggestions.length !== 0 && showSuggestion && (
          <div
            className="z-10 p-2 m-2   shadow-xl bg-blue-400 border-2 border-gray-300  rounded-lg h-max md:w-96 lg:w-[34rem] absolute "
            id="suggestion_box"
          >
            <ul>
              {suggestions.map((suggestion, index) => {
                return (
                  <Link to={"/results?search_query=" + suggestion} key={index} >
                  <li
                    className="cursor-pointer hover:bg-gray-200 "
                    
                  >
                    <button
                      className="p-1 w-full text-left"
                      onClick={(e) => {
                        setsearchQuery(
                          e?.currentTarget?.children[1]?.innerHTML
                        );
                        setShowSuggestion(false);
                         
                      }}
                    >
                      {<SearchSVG />}
                      <span className="suggestion"> {suggestion} </span>
                    </button>
                  </li>
                  </Link>
                );
              })}
            </ul>
          </div>
        )}
      </form>
      {/* right part -     user icon  */}
      <div className="flex items-center mr-4">
        <div className="m-2">
          <select className="w-12 border bg-gray-200" onChange={(e)=>{dispatch(changeRegion(e.target.value))}}>
            <option value='IN' title="INDIA">IN</option>
            <option value='US' title="United State">US</option>
            <option value='AE' title="Arab">AE</option>
            <option value='BH' title="Bahrain">BH</option>
            <option value='KE' title=" Kenya">KE</option>
          </select>
        </div>
        <UserIcon/>
      </div>
    </div>
  );
};
