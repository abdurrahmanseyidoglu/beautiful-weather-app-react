import React, { useState, useEffect } from "react";

export default function Header({ onNavColor }) {
  // const [rerender, setRerender] = useState(false);

  // useEffect(() => {
  //   setRerender(!rerender);
  //   console.log(navColor);
  // }, [navColor]);
  return (
    <nav
      className={`  flex justify-center ${onNavColor}  transition ease-in-out duration-2500 items-center text-white  text-xl h-14`}
    >
      Weather App
    </nav>
  );
}
