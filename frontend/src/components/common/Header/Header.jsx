import netflixLogo from "../../../assets/images/netflix-logo.png";
import userLogo from "../../../assets/images/user-logo.png";

import DropdownMenu from "../Dropdown/Dropdown";
function Header() {
  return (
    <header className="bg-gradient-to-b from-black">
      <div className="flex justify-between items-center px-2">
        <div className="flex px-4 py-2 z-10">
          <img className="w-44" src={netflixLogo} alt="netflix-logo" />
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center w-10 h-10">
            <img src={userLogo} alt="user-logo" />
          </div>
          <DropdownMenu />
        </div>
      </div>
    </header>
  );
}

export default Header;
