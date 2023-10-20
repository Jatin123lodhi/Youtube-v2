import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { SEARCH_RESULTS_API, SEARCH_RESULTS_BY_LOCATOIN } from '../utils/constants';
import { Link } from 'react-router-dom';
const ResultCard = (info)=>{
  //console.log(info.id.videoId,'  info');
  const {snippet} = info;
   const {channelTitle,title,thumbnails,description,publishTime} = snippet;
  //  const {viewCount} = statistics;
  return (
    <div className='flex items-center p-2 border shadow-lg w-full h-52'>
       <div className=' h-40  overflow-hidden rounded-lg flex items-center border border-gray-300'>
        <img className='h-56 w-52 lg:w-full'  src={thumbnails.high.url} alt='someImg'  />
       </div>
       <div className='p-1 m-2 '>
        <ul>
          <li className='text-xl'>{title}</li>
          <li className='text-sm text-gray-600'>132,410 views . 2 months ago</li>
          <li className='mt-4 text-gray-500'>
          <img className='w-8 h-8 rounded-full  inline mr-3 '  src='https://yt3.googleusercontent.com/njflM_kUrC2TjvIyPTQNi0QmMDFA0YHCWzF0zoMMa4No8D3_uSCpIgbkIlQRRvmT7VSkKwHk=s176-c-k-c0x00ffffff-no-rj' alt='dp'/>
          {channelTitle}</li>
          <li className='text-gray-500 mt-4'>{description}</li>
        </ul>
       </div>
    </div>
  );
}

export const Results = () => {
  const [searchParams] = useSearchParams();
  const [results,setResults] = useState([]);
  console.log(searchParams.get("search_query"),  ' search query');
  const searchQuery = searchParams.get("search_query");
  useEffect(()=>{
    //API CALL for search query
    getResults();
  },[])
  const getResults = async ()=>{
    const data = await fetch(SEARCH_RESULTS_API+'&q='+searchQuery);
    const json = await data.json();
    console.log(json.items);
    setResults(json.items)
  }
  
  return (
    <div className='mt-5 m-2 p-6'>
      {results?.map((result)=>{
        return <Link to={"/watch?v=" + result.id.videoId}><ResultCard {...result}  /></Link>
      })}
    {/* {console.log(results[0].id.videoId,' ****')}  */}
      {/* {  results.length!==0 && <ResultCard {...results[0]}/>} */}
    </div>
    // results.length!==0 && <ResultCard {...results[0]}/>

  )
}
