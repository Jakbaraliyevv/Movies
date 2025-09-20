import logo from "../../../public/logosvg.svg";
import { Lock, Search, User } from "lucide-react";
import AutComponents from "../auth";
import { useState, useEffect, useRef } from "react";
import SearchModal from "./search-modal";

function Navbar() {
  const [openAuth, setOpenAuth] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  const token = localStorage.getItem("token");

  const dropdownRef = useRef(null);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload(); // sahifani yangilab yuboradi
  };

  // Tashqariga bosilganda dropdown yopiladi
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(false);
      }
    };

    if (openDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openDropdown]);

  return (
    <section className="bg-[rgb(26,11,46)] sticky top-0 z-50">
      <div className="w-[90%] m-auto py-[20px] flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-end gap-2">
          <img className="w-[50px]" src={logo} alt="logo" />
          <h1 className="text-[27px] text-white font-medium font-serif">
            Filmagnet
          </h1>
        </div>

        {/* Search + Button */}
        <div className="flex items-center gap-4 relative" ref={dropdownRef}>
         
          <SearchModal />
          <button
            onClick={() =>
              token ? setOpenDropdown((prev) => !prev) : setOpenAuth(true)
            }
            className="relative overflow-hidden text-white w-[150px] py-[7px] text-[19px] font-medium rounded-full border border-[#ffd700] group"
          >
            <span className=" text-[19px] font-medium relative z-10 transition-colors duration-500 group-hover:text-black">
              {token ? (
                <span className=" flex items-center justify-center gap-2">
                  <User size={22} />
                  <span>User</span>
                </span>
              ) : (
                "Kirish"
              )}
            </span>
            <span className="absolute top-0 left-0 w-0 h-full bg-[#ffd700] transition-all duration-500 ease-in-out rounded-full group-hover:w-full"></span>
          </button>

          {/* Dropdown */}
          {token && openDropdown && (
            <div className="absolute top-[60px] right-0 bg-[rgb(17,7,31)] border border-[#ffd700] rounded-lg w-[180px] shadow-lg text-white">
              <ul className="flex flex-col">
                <li className="flex items-center gap-3 px-4 py-2 text-[17px] font-medium hover:bg-[#ffd700] hover:text-black cursor-pointer">
                  Profile
                  <Lock size={19} />
                </li>
                <li className="flex items-center gap-3 text-[17px] font-medium px-4 py-2 hover:bg-[#ffd700] hover:text-black cursor-pointer">
                  Saved
                  <Lock size={19} />
                </li>
                <li
                  onClick={handleLogout}
                  className="text-[17px] font-medium px-4 py-2 hover:bg-red-500 hover:text-white cursor-pointer"
                >
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Auth modal */}
      <AutComponents show={openAuth} onClose={() => setOpenAuth(false)} />
    </section>
  );
}

export default Navbar;
