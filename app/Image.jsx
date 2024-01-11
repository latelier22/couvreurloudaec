import React from "react";

export default function App({image}) {
  return (
    <div className="flex justify-center w-full">
      <img
        src={`images/${image}`}
        className="h-auto w-full"
        alt="parc de jeu du repaire des p'tits loups"
      />
    </div>
  );
}
