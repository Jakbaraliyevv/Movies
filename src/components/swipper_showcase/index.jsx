import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useAxios } from "../../hooks";

function Shwipper_showcase() {
  const axios = useAxios();
  const navigate = useNavigate();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    axios({
      url: "/movies",
      method: "GET",
    })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="w-full m-auto py-6">
        {/* Loading skeleton for swiper */}
        <div className="flex gap-5 px-4">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="w-full h-[240px] bg-gray-300/20 rounded-xl overflow-hidden shadow-md animate-pulse"
            >
              <div className="w-full h-full bg-gradient-to-r from-gray-300/10 via-gray-300/20 to-gray-300/10 animate-pulse"></div>
            </div>
          ))}
        </div>

        {/* Central loading indicator */}
        {/* <div className="flex items-center justify-center mt-6 gap-3">
          <Loader2 size={24} className="animate-spin text-[#ffd700]" />
          <span className="text-[#ffd700] text-lg font-medium">
            Filmlar yuklanmoqda...
          </span>
        </div> */}
      </div>
    );
  }

  return (
    <div className="w-full m-auto py-6">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={6} // faqat bitta slayd ko'rinadi
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500, // 2.5 sekunddan keyin slayd almashadi
          disableOnInteraction: false, // foydalanuvchi tugma bossayam to'xtamasin
        }}
        loop={true} // oxiriga yetganda qaytib birinchidan boshlaydi
        className="rounded-2xl"
      >
        {data?.map((value) =>
          value?.isPremiere ? (
            ""
          ) : (
            <SwiperSlide key={value?._id}>
              <div
                onClick={() => navigate(`/movies/${value?._id}`)} // 👈 ID bilan o'tish
                className="w-full cursor-pointer h-[240px] overflow-hidden rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={value?.posterUrl}
                  alt={value?.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </div>
  );
}

export default Shwipper_showcase;
