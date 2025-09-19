import { Link } from "react-router-dom";
import logo from "../../../public/logosvg.svg";
import tg from "../../assets/tg.webp";
import insta from "../../assets/insta.webp";

function Footer() {
  return (
    <section className="bg-[rgb(26,11,46)] py-[60px] mt-[40px]">
      <div className="w-[90%] m-auto flex items-start justify-between">
        <div className="flex flex-col gap-4 w-[27%]">
          <div className="flex items-end gap-2">
            <img className="w-[50px]" src={logo} alt="logo" />
            <h1 className="text-[27px] text-white font-medium font-serif">
              Filmagnet
            </h1>
          </div>
          <p className="text-gray-300 text-[15px] font-medium ">
            Eng so'nggi va sifatli filmlar seriallar va multfilmlarni bepul va
            reklamasiz tomosha qiling. 24/7 yangi kontentlar qo'shib turamiz.
          </p>
        </div>
        <div className=" ">
          <h3 className="text-[21px] font-bold text-[rgb(255,215,0)]">
            Bo'limlar
          </h3>

          <div className="flex flex-col gap-3 mt-3 text-gray-300 text-[15px] font-medium">
            <Link to="#">O'zbek filimlar</Link>
            <Link to="#">K-dramalar</Link>
            <Link to="#">Multfilmlar</Link>
            <Link to="#">Animelar</Link>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-[21px] font-bold text-[rgb(255,215,0)]">
            Obuna bo'ling
          </h3>

          <div className="flex items-center gap-2">
            <div className="w-[40px] h-[40px] bg-[rgb(55,65,81)] rounded-full flex items-center justify-center">
              <img className="w-[24px]" src={tg} alt="" />
            </div>
            <div>
              <h4 className="text-gray-400 font-medium text-[14px]">
                Telegram
              </h4>
              <a
                className="text-[19px] text-[#FFF] font-semibold hover:text-blue-400 transition duration-300"
                href="jakbaraliyev29"
              >
                @Jakbaraliyev29
              </a>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-[40px] h-[40px] bg-[rgb(55,65,81)] rounded-full flex items-center justify-center">
              <img className="w-[24px]" src={insta} alt="" />
            </div>
            <div>
              <h4 className="text-gray-400 font-medium text-[14px]">
                Instagram
              </h4>
              <a className="text-[19px] text-[#FFF] font-semibold hover:text-blue-400 transition duration-300" href="jakbaraliyev29">
                MovieChanel
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
