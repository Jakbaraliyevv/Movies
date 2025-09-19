import { ArrowRight, Grid } from "lucide-react";
import Card_movie from "../card-movie";

function PremyeraFilms() {
  return (
    <section className="w-[90%] m-auto ">
      <div>
        <div className="flex items-center justify-between pb-7">
          <h2 className="text-[33px] font-bold text-[#FFF]">
            Premyera (Tez kunda)
          </h2>
          <div className=" flex items-center gap-2 text-[19px] font-medium cursor-pointer border-[1px] border-gray-500 py-1 px-4 rounded-[5px] justify-center">
            <h3 className="text-[#FFF]">Barchasini ko'rish</h3>
            <ArrowRight className="w-6 h-6 text-white " />
          </div>
        </div>
        <div>
          <Card_movie />
        </div>
      </div>
    </section>
  );
}

export default PremyeraFilms;
