import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useAxios } from "../../hooks";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function Shwipper_showcase() {
  const axios = useAxios();
  const navigate = useNavigate();

  const [data, setData] = useState();
  axios({
    url: "/movies",
    method: "GET",
  })
    .then((data) => setData(data)) // 👈 axios wrapper bo‘lsa res.data tekshirib oling
    .catch((error) => console.log(error));

  return (
    <div className="w-full m-auto py-6">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={6} // faqat bitta slayd ko‘rinadi
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500, // 2.5 sekunddan keyin slayd almashadi
          disableOnInteraction: false, // foydalanuvchi tugma bossayam to‘xtamasin
        }}
        loop={true} // oxiriga yetganda qaytib birinchidan boshlaydi
        className="rounded-2xl"
      >
        {data?.map((value) => (
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
        ))}
      </Swiper>
    </div>
  );
}

export default Shwipper_showcase;
