import React from "react";

export default function Header({navColor}) {

  return (
    <nav
    className={navColor ? "flex justify-center items-center text-white  text-xl h-14":"flex justify-center items-center text-white bg-gray-400 text-xl h-14"}>
      Weather App
    </nav>
  );
}
