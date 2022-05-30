import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";
import LoadingJson from "../../assets/loading/loading.json";
export default function Loading() {
  return (
    <div className="fixed h-screen w-screen bg-white flex items-center justify-center z-10">
      <Player
        autoplay
        loop
        src={LoadingJson}
        style={{ height: "300px", width: "300px" }}
      ></Player>
    </div>
  );
}
