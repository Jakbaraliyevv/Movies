import { Box, Filter, Grid, List, Menu } from "lucide-react";
import ModalCatagory from "./modal";
import Card_movie from "../card-movie";
import { useNavigate } from "react-router-dom";

function Catagories() {
  const navigate = useNavigate();
  return (
    <section className="text-[#FFF] py-[30px] md:py-[40px]">
      <div className="w-[90%] m-auto">
        <div className="flex items-center justify-between">
          <h2 className="text-[22px] sm:text-[28px] md:text-[33px] font-bold">
            Saralash
          </h2>

          <div className="flex items-center gap-[10px] sm:gap-[15px]">
            <div
              onClick={() => navigate("/all-movies")}
              className="flex items-center gap-1 sm:gap-2 text-[14px] sm:text-[16px] md:text-[19px] font-medium cursor-pointer border-[1px] border-gray-500 py-[4px] sm:py-1 px-2 sm:px-3 md:px-4 rounded-[5px] justify-center hover:border-[#ffd700] transition-colors"
            >
              <Grid className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              <h3 className="hidden min-[380px]:block">Barchasi</h3>
            </div>
            <div>
              <ModalCatagory />
            </div>
          </div>
        </div>
        <div className="mt-[20px] sm:mt-[25px] md:mt-[29px]">
          <Card_movie />
        </div>
      </div>
    </section>
  );
}

export default Catagories;
