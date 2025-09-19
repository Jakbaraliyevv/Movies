import logo from "../../../public/logosvg.svg";
import { Search } from "lucide-react";

function Navbar() {
  return (
    <section className="bg-[rgb(30,34,43)] sticky top-0 z-50">
      <div className="w-[90%] m-auto py-[20px] flex items-center justify-between">
        <div className="flex items-end gap-2">
          <img className="w-[50px]" src={logo} alt="logo" />
          <h1 className="text-[27px] text-white font-medium font-serif">
            Filmagnet
          </h1>
        </div>

        <div className="flex items-center gap-4">
          <Search size={27} className="text-[#FFF] cursor-pointer" />

          <button className="relative overflow-hidden text-white w-[150px] py-[7px] text-[19px] font-medium rounded-full border border-[#ffd700] group">
            <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
              Kirish
            </span>
            <span className="absolute top-0 left-0 w-0 h-full bg-[#ffd700] transition-all duration-500 ease-in-out rounded-full group-hover:w-full"></span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
