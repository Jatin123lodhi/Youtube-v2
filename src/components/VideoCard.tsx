import { VideoData } from "../types/VideoCard";

export const VideoCard = (props: VideoData) => {
  const {snippet,statistics} = props
   const {channelTitle,title,thumbnails} = snippet;
   const {viewCount} = statistics;
   let views: string | number = Number(viewCount);
   if(views>1000000){
    views = views/1000000 
    views = views.toFixed(2);
    views += 'M'
   }else if(views >1000){
    views = views/1000
    views = views.toFixed(2);
    views += 'K'
   }
    
  return (
    <div className='my-1 mx-2 w-72 '>
        
        <ul>
            <li className=' h-40   overflow-hidden rounded-lg flex items-center relative'><img className='h-56 w-52 lg:w-full' src={thumbnails.high.url} alt='videoImg' /> 
              <div className='bg-black text-white absolute rounded right-1 bottom-1 px-1 text-sm'>11:40</div>
            </li>
            <li className='py-2 ml-2'>
              <div className='flex'>
                <div className=''>
                <img className='w-8 h-8 rounded-full mr-3 '  src='https://i.pravatar.cc/300' alt='dp'/>
                {/* {getRandomAvtar()} */}
                </div>
                <div className='shrink-[3]'>
                  <ul>
                    <li className='text-sm text-gray-900 font-medium'>{title}</li>
                    <li className='text-sm text-gray-600 '>{channelTitle}</li>
                    <li className='text-sm text-gray-600 '>{views} views</li>
                  </ul>
                </div>
              </div>
            </li>
            
            
        </ul> 
    </div>
  )
}
