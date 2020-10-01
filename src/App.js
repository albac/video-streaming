import React, { useEffect, useRef } from "react";
import "./App.css";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import awsvideoconfig from "./aws-video-exports";

function VideoPlayer(props) {
  const playerRef = useRef();

  useEffect(() => {
    const player = videojs(playerRef.current, props);
    return () => {
      player.dispose();
    };
  });

  return (
    <div>
      <div data-vjs-player>
        <video ref={playerRef} className="video-js" />
      </div>
    </div>
  );
}

const videoJsOptions = {
  autoplay: true,
  controls: true,
  sources: [
    {
      src: awsvideoconfig.awsOutputLiveLL,
    },
  ],
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <VideoPlayer {...videoJsOptions} />
      </header>
    </div>
  );
}

export default App;
