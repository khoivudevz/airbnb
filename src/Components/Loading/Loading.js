import React from "react";
import ReactLoading from "react-loading";

export default function Loading() {
  return (
    <div className="fixed h-screen w-screen bg-white flex items-center justify-center z-10">
      <ReactLoading type="spinningBubbles" color="#ff385c" />
    </div>
  );
}
