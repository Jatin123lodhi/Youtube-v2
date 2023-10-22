
export const VideoPlayer = ({param}:{param: string | null}) => {
  console.log(param,'  searchparam in video player')
  return (
    <div>
      <div className="border ">
        <iframe
          width="905"
          height="510"
          src={"https://www.youtube.com/embed/" + param}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <ul className=" mr-10">
          <li className="text-2xl m-2">
            A Comprehensive Guide to Flexbox Sizing
          </li>
          <li>
            <div>
              <div className="flex justify-between">
                <div className="flex items-center">
                  <div className="">
                    <img
                      className="w-12 h-12 mx-2 rounded-full border border-black "
                      src="https://i.pravatar.cc/300"
                      alt="dp"
                    />
                  </div>
                  <div className=" mx-1">
                    <div className="font-bold">Envato tuts+</div>
                    <div className="text-sm">1.2M Subscribers</div>
                  </div>
                  <div className="">
                    <button className="bg-black text-white rounded-full px-4 py-2 mx-4">
                      Subscribe
                    </button>
                  </div>
                </div>
                <div className="flex items-center">
                  <div>
                    <button className="border-r border-gray-300 hover:bg-gray-300 rounded-l-full px-4 py-2 ">
                      Like 197
                    </button>
                  </div>
                  <div>
                    <button className="border-0 border-gray-300 hover:bg-gray-300 rounded-r-full px-4 py-2  ">
                      Dislike
                    </button>
                  </div>
                  <div>
                    <button className="  hover:bg-gray-300 rounded-full px-4 py-2 ">
                      Share
                    </button>
                  </div>
                  <div>
                    <button className="  hover:bg-gray-300 rounded-full px-4 py-2">
                      ...
                    </button>
                  </div>
                </div>
              </div>
              <div className=" m-2 mt-4">
                <div className="flex">
                  <div className="mx-2">12321 views </div>
                  <div className="mx-2">6 June,2021 </div>
                  <div className="mx-2">Web design </div>
                </div>
                <div className="mx-2">
                  Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Error, est.Lorem ipsum dolor sit
                  amet. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Error, est.
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
