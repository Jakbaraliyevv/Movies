import logo from "../../../public/logosvg.svg";
import { Lock, Search, User } from "lucide-react";
import AutComponents from "../auth";
import { useState, useEffect, useRef } from "react";
import SearchModal from "./search-modal";
import { Link } from "react-router-dom";
import { useAxios } from "../../hooks";

function Navbar() {
  const [openAuth, setOpenAuth] = useState(false);
  const axios = useAxios();
  const [openDropdown, setOpenDropdown] = useState(false);

  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));
  const dropdownRef = useRef(null);

  const handleLogout = () => {
    axios({
      url: "/auth/logout",
      method: "POST",
      data: {}, // ✅ bo‘sh object
    })
      .then(() => {
        localStorage.removeItem("token");
        // 🔥 Users ro‘yxatini yangilash
        axios({ url: "/auth/users", method: "GET" })
          .then((res) => setUsers(res))
          .catch((err) => console.log(err));

        window.location.reload();
      })
      .catch((error) => console.log(error));
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
        <Link to={"/"} className="flex items-end gap-2">
          <img className="w-[50px]" src={logo} alt="logo" />
          <h1 className="text-[27px] text-white font-medium font-serif">
            Filmagnet
          </h1>
        </Link>

        {/* Search + Button */}
        <div className="flex items-center gap-4 relative" ref={dropdownRef}>
          <SearchModal />
          <button
            onClick={() =>
              token ? setOpenDropdown((prev) => !prev) : setOpenAuth(true)
            }
            className="relative overflow-hidden text-white px-6 py-[7px] text-[19px] font-medium rounded-full border border-[#ffd700] group"
          >
            <span className=" text-[19px]  font-medium relative z-10 transition-colors duration-500 group-hover:text-black">
              {token ? (
                <span className=" flex items-center justify-center gap-2">
                  <User size={22} />
                  <span>{user?.name ? user?.name : "User"}</span>
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
