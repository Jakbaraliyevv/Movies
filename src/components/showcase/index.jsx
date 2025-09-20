import { useState } from "react";
import AutComponents from "../auth";
import Shwipper_showcase from "../swipper_showcase";

function Showcase() {
  const [openAuth, setOpenAuth] = useState(false);

  return (
    <section className="bg_img bg_2 ">
      <div className="pt-[40px] w-[90%] m-auto">
        <div className="flex flex-col gap-[27px] justify-center">
          <h1 className="text-[#FFF] text-[34px] font-bold font-serif">
            Siz sevgan barcha kinolar —
            <span className="text-[#FFD700]">O‘zbek tilida!</span> <br />
          </h1>
          <p className="text-[#FFF] text-[18px] leading-[28px] max-w-[650px]">
            {" "}
            Har kuni yangi filmlar, qiziqarli seriallar va unutilmas voqealar
            sizni kutmoqda. Bu yerda siz eng so‘nggi premyeralar va mashhur
            klassikalarni{" "}
            <span className="font-medium text-[#FFD700]">
              {" "}
              O'zbek tilida{" "}
            </span>{" "}
            tomosha qilishingiz mumkin. Biz bilan birga kino olamining zavqini
            his eting va maroqli dam oling!{" "}
          </p>

          <button
            onClick={() => setOpenAuth(true)}
            className="relative overflow-hidden text-white w-[270px] py-[9px] text-[19px] font-medium rounded-full border border-[#ffd700] group"
          >
            <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
              Ro'yxatdan o'tish
            </span>
            <span className="absolute top-0 left-0 w-0 h-full bg-[#ffd700] transition-all duration-500 ease-in-out rounded-full group-hover:w-full"></span>
          </button>

          <Shwipper_showcase />
        </div>
      </div>

      {/* Auth Modal */}
      <AutComponents show={openAuth} onClose={() => setOpenAuth(false)} />
    </section>
  );
}

export default Showcase;
