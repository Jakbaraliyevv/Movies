// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";

// import "swiper/css";

// function Shwipper_showcase() {
//   return (
//     <div className="w-full m-auto py-6">
//       <Swiper
//         modules={[Autoplay]}
//         spaceBetween={20}
//         slidesPerView={6}
//         centeredSlides={true}
//         autoplay={{
//           delay: 0, // kechikishsiz
//           disableOnInteraction: false,
//           pauseOnMouseEnter: false,
//         }}
//         speed={3000} // qancha tezlikda siljishi
//         loop={true}
//         freeMode={true} // uzluksiz oqishi uchun
//         className="rounded-2xl"
//       >
//         {[1, 2, 3, 4, 5, 6, 7].map((num, i) => (
//           <SwiperSlide key={i}>
//             <div className="w-full h-[200px] overflow-hidden rounded-xl shadow-md transition-transform duration-300 hover:scale-105">
//               <img
//                 src={`https://picsum.photos/800/400?random=${num}`}
//                 alt={`Slide ${num}`}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

// export default Shwipper_showcase;

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Shwipper_showcase() {
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
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num, i) => (
          <SwiperSlide key={i}>
            <div className="w-full cursor-pointer h-[240px] overflow-hidden rounded-xl shadow-md transition-transform duration-300 hover:scale-105">
              <img
                src={`https://picsum.photos/800/400?random=${num}`}
                alt={`Slide ${num}`}
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
