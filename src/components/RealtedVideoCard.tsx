

export const RealtedVideoCard = () => {
  return (
    <div className="flex items-center p-2 border m-1 shadow-lg w-full h-52">
      <div className=" h-40  overflow-hidden rounded-lg flex items-center ">
        <img
          className="w-60 h-40"
          src="https://i.pravatar.cc/600"
          alt="someImg"
        />
      </div>
      <div className="p-1 m-1  w-3/5">
        <ul>
          <li className="text-xl">video title</li>
          <li className="text-sm text-gray-600">
            132,410 views . 2 months ago
          </li>
          <li className="mt-4 text-gray-500">
            <img
              className="w-8 h-8 rounded-full  inline mr-3 "
              src="https://yt3.googleusercontent.com/njflM_kUrC2TjvIyPTQNi0QmMDFA0YHCWzF0zoMMa4No8D3_uSCpIgbkIlQRRvmT7VSkKwHk=s176-c-k-c0x00ffffff-no-rj"
              alt="dp"
            />
            channel title
          </li>
          <li className="text-gray-500 mt-4">description descriptiondescription</li>
        </ul>
      </div>
    </div>
  );
};
