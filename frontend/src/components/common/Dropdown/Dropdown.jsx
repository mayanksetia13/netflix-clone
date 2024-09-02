import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import dropDownIcon from "../../../assets/images/drop-down-arrow.png";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={menuRef}>
      <button onClick={toggleMenu} className="flex items-center cursor-pointer">
        <img src={dropDownIcon} alt="dropdown-arrow" />
      </button>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-black ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <span
              className="block px-4 py-2 text-sm text-white"
              role="menuitem"
            >
              <Link to={"/account"}>{"Account"}</Link>
            </span>
            <span
              className="block px-4 py-2 text-sm text-white"
              role="menuitem"
            >
              Sign out
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
