// import { Link } from "react-router-dom";
// import logo from "../../../public/logosvg.svg";
// import tg from "../../assets/tg.webp";
// import insta from "../../assets/insta.webp";

// function Footer() {
//   return (
//     <section className="bg-[rgb(26,11,46)] py-[60px] mt-[40px]">
//       <div className="w-[90%] m-auto flex items-start justify-between max-[560px]:grid max-[560px]:grid-cols-1 max-[560px]:gap-5">
//         <div className="flex flex-col gap-4 w-[27%]">
//           <Link to={"/"} className="flex items-end gap-2">
//             <img className="w-[50px]" src={logo} alt="logo" />
//             <h1 className="text-[27px] text-white font-medium font-serif">
//               Filmagnet
//             </h1>
//           </Link>
//           <p className="text-gray-300 text-[15px] font-medium ">
//             Eng so'nggi va sifatli filmlar seriallar va multfilmlarni bepul va
//             reklamasiz tomosha qiling. 24/7 yangi kontentlar qo'shib turamiz.
//           </p>
//         </div>
//         <div className=" ">
//           <h3 className="text-[21px] font-bold text-[rgb(255,215,0)]">
//             Bo'limlar
//           </h3>

//           <div className="flex flex-col gap-3 mt-3 text-gray-300 text-[15px] font-medium">
//             <Link to="#">O'zbek filimlar</Link>
//             <Link to="#">K-dramalar</Link>
//             <Link to="#">Multfilmlar</Link>
//             <Link to="#">Animelar</Link>
//           </div>
//         </div>
//         <div className="flex flex-col gap-4">
//           <h3 className="text-[21px] font-bold text-[rgb(233,212,97)]">
//             Obuna bo'ling
//           </h3>

//           <div className="flex items-center gap-2">
//             <div className="w-[40px] h-[40px] bg-[rgb(55,65,81)] rounded-full flex items-center justify-center">
//               <img className="w-[24px]" src={tg} alt="" />
//             </div>
//             <div>
//               <h4 className="text-gray-400 font-medium text-[14px]">
//                 Telegram
//               </h4>
//               <a
//                 className="text-[19px] text-[#FFF] font-semibold hover:text-blue-400 transition duration-300"
//                 href="jakbaraliyev29"
//               >
//                 @Jakbaraliyev29
//               </a>
//             </div>
//           </div>
//           <div className="flex items-center gap-2">
//             <div className="w-[40px] h-[40px] bg-[rgb(55,65,81)] rounded-full flex items-center justify-center">
//               <img className="w-[24px]" src={insta} alt="" />
//             </div>
//             <div>
//               <h4 className="text-gray-400 font-medium text-[14px]">
//                 Instagram
//               </h4>
//               <a
//                 className="text-[19px] text-[#FFF] font-semibold hover:text-blue-400 transition duration-300"
//                 href="jakbaraliyev29"
//               >
//                 MovieChanel
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Footer;

import { Link } from "react-router-dom";
import logo from "../../../public/logosvg.svg";
import tg from "../../assets/tg.webp";
import insta from "../../assets/insta.webp";

function Footer() {
  return (
    <section className="bg-[rgb(26,11,46)] py-[60px] mt-[40px]">
      <div
        className="
          w-[90%] m-auto
          flex justify-between gap-10
          max-[1024px]:flex-wrap
          max-[640px]:flex-col
        "
      >
        {/* LOGO & TEXT */}
        <div className="flex flex-col gap-4 w-[27%] max-[1024px]:w-[45%] max-[640px]:w-full">
          <Link to="/" className="flex items-end gap-2">
            <img className="w-[50px]" src={logo} alt="logo" />
            <h1 className="text-[27px] text-white font-medium font-serif">
              Filmagnet
            </h1>
          </Link>
          <p className="text-gray-300 text-[15px] font-medium">
            Eng so'nggi va sifatli filmlar, seriallar va multfilmlarni bepul va
            reklamasiz tomosha qiling. 24/7 yangi kontentlar qo‘shib boriladi.
          </p>
        </div>

        {/* BO‘LIMLAR */}
        <div className="w-[20%] max-[1024px]:w-[45%] max-[640px]:w-full">
          <h3 className="text-[21px] font-bold text-[rgb(255,215,0)]">
            Bo‘limlar
          </h3>

          <div className="flex flex-col gap-3 mt-3 text-gray-300 text-[15px] font-medium">
            <span className="cursor-pointer hover:text-white transition">
              O‘zbek filmlar
            </span>
            <span className="cursor-pointer hover:text-white transition">
              K-dramalar
            </span>
            <span className="cursor-pointer hover:text-white transition">
              Multfilmlar
            </span>
            <span className="cursor-pointer hover:text-white transition">
              Animelar
            </span>
          </div>
        </div>

        {/* OBUNA */}
        <div className="flex flex-col gap-4 w-[25%] max-[1024px]:w-[45%] max-[640px]:w-full">
          <h3 className="text-[21px] font-bold text-[rgb(233,212,97)]">
            Obuna bo‘ling
          </h3>

          {/* TELEGRAM */}
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="w-[40px] h-[40px] bg-[rgb(55,65,81)] rounded-full flex items-center justify-center group-hover:bg-blue-500 transition">
              <img className="w-[22px]" src={tg} alt="Telegram" />
            </div>
            <div>
              <h4 className="text-gray-400 font-medium text-[14px]">
                Telegram
              </h4>
              <p className="text-[18px] text-white font-semibold group-hover:text-blue-400 transition">
                @Jakbaraliyev29
              </p>
            </div>
          </div>

          {/* INSTAGRAM */}
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="w-[40px] h-[40px] bg-[rgb(55,65,81)] rounded-full flex items-center justify-center group-hover:bg-pink-500 transition">
              <img className="w-[22px]" src={insta} alt="Instagram" />
            </div>
            <div>
              <h4 className="text-gray-400 font-medium text-[14px]">
                Instagram
              </h4>
              <p className="text-[18px] text-white font-semibold group-hover:text-pink-400 transition">
                MovieChannel
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
