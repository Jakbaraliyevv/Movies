import { Box, Filter, Grid, List, Menu } from "lucide-react";
import ModalCatagory from "./modal";
import Card_movie from "../card-movie";

function Catagories() {
  return (
    <section className="text-[#FFF] py-[40px]">
      <div className="w-[90%] m-auto">
        <div className=" flex items-center justify-between">
          <h2 className="text-[33px] font-bold ">Tomoshabinlar tanlovi</h2>

          <div className="flex items-center gap-[15px]">
            <div className="flex items-center gap-2 text-[19px] font-medium cursor-pointer border-[1px] border-gray-500 py-1 px-4 rounded-[5px] justify-center">
              <Grid className="w-6 h-6" />

              <h3>Barchasi</h3>
            </div>
            <div>
              <ModalCatagory />
            </div>
          </div>
        </div>
        <div className="mt-[29px]">
          <Card_movie />
        </div>
      </div>
    </section>
  );
}

export default Catagories;
