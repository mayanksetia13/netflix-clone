import React from "react";
import netflixLogo from "../../../assets/images/netflix-logo.png";

function Header() {
  return (
    <header className="bg-gradient-to-b from-black">
      <div className="flex px-4 py-2 z-10">
        <img className="w-44" src={netflixLogo} alt="netflix-logo" />
      </div>
    </header>
  );
}

export default Header;
