
// export const ButtonList = () => {
   
//   const handelLeftScroll = ()=>{
//     const my_div = document.getElementById('btn_crousal')
//     my_div.scrollLeft += 150; // increases the scroll value towards right
//   }
//   const handelRightScroll = ()=>{
//     const my_div = document.getElementById('btn_crousal')
//     my_div.scrollLeft -= 150; // decreases scroll value towards left
//   }
//   return (
//     <div className='  h-12 overflow-y-hidden'> 
//     <div className='flex justify-center '>
//     <div className='  flex items-center mb-4 '>
//        <button className='' onClick={()=> handelRightScroll()}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//         <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
//       </svg></button> 
//     </div>
//       <div className=' h-16 w-[78rem]  flex overflow-x-scroll overflow-y-hidden scroll-smooth px-1' id='btn_crousal'>
//           <div><button className=' m-2 py-1 px-3 rounded w-max bg-black text-white'>All</button></div>
//           <div><button className='bg-gray-200 m-2 py-1 px-3 rounded w-max'>Thougts</button></div>
//           <div><button className='bg-gray-200 m-2 py-1 px-3 rounded w-max'>Music</button></div>
//           <div><button className='bg-gray-200 m-2 py-1 px-3 rounded w-max'>Computer science</button></div>
//           <div><button className='bg-gray-200 m-2 py-1 px-3 rounded w-max'>Mixins</button></div>
//           <div><button className='bg-gray-200 m-2 py-1 px-3 rounded w-max'>TED</button></div>
//           <div><button className='bg-gray-200 m-2 py-1 px-3 rounded w-max'>LIVE</button></div>
//           <div><button className='bg-gray-200 m-2 py-1 px-3 rounded w-max'>Mantras</button></div>
//           <div><button className='bg-gray-200 m-2 py-1 px-3 rounded w-max'>Podcast</button></div>
//           <div><button className='bg-gray-200 m-2 py-1 px-3 rounded w-max'>Startup Company</button></div>
//           <div><button className='bg-gray-200 m-2 py-1 px-3 rounded w-max'>Comedy</button></div>
//           <div><button className='bg-gray-200 m-2 py-1 px-3 rounded w-max'>Bollywood Music</button></div>
//           <div><button className='bg-gray-200 m-2 py-1 px-3 rounded w-max'>Bhajan Music</button></div>
//           <div><button className='bg-gray-200 m-2 py-1 px-3 rounded w-max'>Namaste Js</button></div>
//           <div><button className='bg-gray-200 m-2 py-1 px-3 rounded w-max'>React</button></div>
//           <div><button className='bg-gray-200 m-2 py-1 px-3 rounded w-max'>Kapil Sharma</button></div>
//           <div><button className='bg-gray-200 m-2 py-1 px-3 rounded w-max'>Cricket</button></div>
//           <div><button className='bg-gray-200 m-2 py-1 px-3 rounded w-max'>Songs</button></div>
//           <div><button className='bg-gray-200 m-2 py-1 px-3 rounded w-max'>Music</button></div>   
//       </div>
//       <div className='  flex items-center mb-4'>
//         <button onClick={()=> handelLeftScroll()}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
//         </svg></button> 

//       </div>
//     </div>
//     </div>
//   )
// }
