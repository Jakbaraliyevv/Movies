import logo from "../../../public/logosvg.svg";
import { Search } from "lucide-react";
import AutComponents from "../auth";

function Navbar() {
  return (
    <section className="bg-[rgb(26,11,46)] sticky top-0 z-50">
      <div className="w-[90%] m-auto py-[20px] flex items-center justify-between">
        <div className="flex items-end gap-2">
          <img className="w-[50px]" src={logo} alt="logo" />
          <h1 className="text-[27px] text-white font-medium font-serif">
            Filmagnet
          </h1>
        </div>

        <div className="flex items-center gap-4">
          <Search size={27} className="text-[#FFF] cursor-pointer" />

          <AutComponents />
        </div>
      </div>
    </section>
  );
}

export default Navbar;
