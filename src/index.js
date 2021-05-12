import React from "react";
import ReactDOM from "react-dom";
import AudioPlayer from "./components/test/AudioPlayer";
import tracks from "./components/test/tracks";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <AudioPlayer tracks={tracks} />
  </React.StrictMode>,
  rootElement
);
