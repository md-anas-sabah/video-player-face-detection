import { useState } from "react";
import VideoPlayer from "./VideoPlayer.jsx";

function Home() {
  const [videoFile, setVideoFile] = useState(null);

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    setVideoFile(URL.createObjectURL(file));
  };

  return (
    <div className="dark:bg-gray-800 h-screen">
      {!videoFile ? (
        <div className="flex h-screen flex-col justify-center items-center">
          <div className="border border-dashed border-gray-500 relative">
            <input
              type="file"
              multiple
              accept="video/*"
              className="cursor-pointer relative block opacity-0 w-full h-full p-20 z-50"
              onChange={handleVideoChange}
            />
            <div className="text-center text-white p-10 absolute top-0 right-0 left-0 m-auto">
              <h4>
                Drop files anywhere to upload
                <br />
                or
              </h4>
              <p className="">Select Files</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="">
          {videoFile && <VideoPlayer videoFile={videoFile} />}
        </div>
      )}
    </div>
  );
}

export default Home;
