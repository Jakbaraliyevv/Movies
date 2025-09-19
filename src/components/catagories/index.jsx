import { Box, Filter, Grid, List, Menu } from "lucide-react";

function Catagories() {
  return (
    <section className="text-[#FFF] py-[40px]">
      <div className="w-[90%] m-auto flex items-center justify-between">
        <h1 className="text-[33px] font-bold ">Tomoshabinlar tanlovi</h1>

        <div className="flex items-center gap-[15px]">
          <div className="flex items-center gap-2 text-[19px] font-medium cursor-pointer border-[1px] border-gray-500 py-1 px-4 rounded-[5px] justify-center">
            <Grid className="w-6 h-6" />

            <h3>Barchasi</h3>
          </div>
          <div className="flex items-center gap-2 text-[19px] font-medium cursor-pointer border-[1px] border-gray-500 py-1 px-4 rounded-[5px] justify-center">
            <List className="w-6 h-6" />
            <h3>Kategoria</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Catagories;
