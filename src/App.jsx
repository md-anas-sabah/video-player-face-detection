import { useState } from "react";
import VideoPlayer from "./components/VideoPlayer.jsx";

function App() {
  const [videoFile, setVideoFile] = useState(null);

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    setVideoFile(URL.createObjectURL(file));
  };

  return (
    <div className="App">
      <input type="file" accept="video/*" onChange={handleVideoChange} />
      {videoFile && <VideoPlayer videoFile={videoFile} />}
    </div>
  );
}

export default App;
