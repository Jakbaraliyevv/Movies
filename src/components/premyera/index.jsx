// import { ArrowRight, Play } from "lucide-react";
// import { useAxios } from "../../hooks";
// import { useState } from "react";
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// function PremyeraFilms() {
//   const axios = useAxios();
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     setLoading(true);

//     axios({
//       url: "/movies/premieres",
//       method: "GET",
//     })
//       .then((data) => {
//         setData(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.log(error);
//         setLoading(false);
//       });
//   }, []);
//   function truncateTitle(title, wordLimit = 4) {
//     const words = title.split(" ");
//     if (words.length > wordLimit) {
//       return words.slice(0, wordLimit).join(" ") + "...";
//     }
//     return title;
//   }

//   if (loading) {
//     return (
//       <section className="text-[#FFF] w-[90%] m-auto">
//         {/* Loading indicator */}

//         <div className="grid grid-cols-4 gap-[24px]">
//           {[...Array(4)].map((_, index) => (
//             <div key={index} className="w-full h-auto">
//               <div className="w-full">
//                 <div className="w-full h-[340px] bg-gray-300/20 rounded-lg overflow-hidden shadow-md animate-pulse">
//                   <div className="w-full h-full bg-gradient-to-r from-gray-300/10 via-gray-300/20 to-gray-300/10 animate-pulse"></div>
//                 </div>
//               </div>

//               <div className="flex flex-col gap-3 items-start p-2">
//                 <div className="w-full">
//                   <div className="h-6 bg-gray-600/30 rounded mb-2 animate-pulse w-3/4"></div>
//                   <div className="h-4 bg-gray-600/30 rounded animate-pulse w-full"></div>
//                 </div>

//                 <div className="w-full h-[30px] bg-[#ffd700]/30 rounded-[5px] animate-pulse"></div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className="w-[90%] m-auto ">
//       <div>
//         <div className="flex items-center justify-between pb-7">
//           <h2 className="text-[33px] font-bold text-[#FFF]">
//             Premyera (Tez kunda)
//           </h2>
//         </div>
//         <div className="grid grid-cols-4 text-[#FFF] gap-[24px]">
//           {data.map((value) =>
//             value?.isPremiere ? (
//               <div key={value?._id} className="w-full h-auto">
//                 <div className="w-full">
//                   <img
//                     onClick={() => navigate(`/movies/${value?._id}`)} // 👈 ID
//                     className="w-full cursor-pointer h-[340px] object-cover rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:scale-105"
//                     src={value?.posterUrl}
//                     alt={value?.title}
//                   />
//                 </div>
//                 <div className="flex flex-col gap-3 items-start p-2">
//                   <div>
//                     <h3 className="text-[19px] font-bold">{value?.title}</h3>
//                     <p className="text-[14px] font-medium text-gray-400">
//                       {truncateTitle(value?.description, 4)}
//                     </p>
//                   </div>

//                   <button
//                     onClick={() => navigate(`/movies/${value?._id}`)} // 👈 ID
//                     className="filmBtn w-full bg-[#ffd700] text-[#000] text-[14px] font-medium rounded-[5px] h-[30px]  flex items-center justify-center gap-1"
//                   >
//                     <Play size={12} />
//                     Tomosha qilish
//                   </button>
//                 </div>
//               </div>
//             ) : (
//               ""
//             ),
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default PremyeraFilms;

import { ArrowRight, Play } from "lucide-react";
import { useAxios } from "../../hooks";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function PremyeraFilms() {
  const axios = useAxios();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);

    axios({
      url: "/movies/premieres",
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

  function truncateTitle(title, wordLimit = 4) {
    const words = title.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return title;
  }

  if (loading) {
    return (
      <section className="text-[#FFF] w-[90%] m-auto">
        {/* Loading skeleton - responsive */}
        <div className="grid grid-cols-2 min-[600px]:grid-cols-3 min-[900px]:grid-cols-4 min-[1200px]:grid-cols-5 min-[1400px]:grid-cols-6 gap-[12px] min-[600px]:gap-[16px] min-[900px]:gap-[20px] min-[1200px]:gap-[24px]">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="w-full h-auto">
              <div className="w-full">
                <div className="w-full h-[200px] min-[500px]:h-[250px] min-[768px]:h-[300px] min-[1024px]:h-[340px] bg-gray-300/20 rounded-lg overflow-hidden shadow-md animate-pulse">
                  <div className="w-full h-full bg-gradient-to-r from-gray-300/10 via-gray-300/20 to-gray-300/10 animate-pulse"></div>
                </div>
              </div>

              <div className="flex flex-col gap-2 min-[600px]:gap-3 items-start p-2">
                <div className="w-full">
                  <div className="h-4 min-[600px]:h-5 min-[900px]:h-6 bg-gray-600/30 rounded mb-2 animate-pulse w-3/4"></div>
                  <div className="h-3 min-[600px]:h-4 bg-gray-600/30 rounded animate-pulse w-full"></div>
                </div>

                <div className="w-full h-[26px] min-[600px]:h-[28px] min-[900px]:h-[30px] bg-[#ffd700]/30 rounded-[5px] animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="w-[90%] m-auto">
      <div>
        <div className="flex items-center justify-between pb-4 min-[600px]:pb-5 min-[900px]:pb-7">
          <h2 className="text-[22px] min-[500px]:text-[26px] min-[768px]:text-[30px] min-[1024px]:text-[33px] font-bold text-[#FFF]">
            Premyera (Tez kunda)
          </h2>
        </div>

        {/* Responsive grid: 2 → 3 → 4 → 5 → 6 */}
        <div className="grid grid-cols-2 min-[600px]:grid-cols-3 min-[900px]:grid-cols-4 min-[1200px]:grid-cols-5 min-[1400px]:grid-cols-5 text-[#FFF] gap-[12px] min-[600px]:gap-[16px] min-[900px]:gap-[20px] min-[1200px]:gap-[24px]">
          {data.map((value) =>
            value?.isPremiere ? (
              <div key={value?._id} className="w-full h-auto">
                <div className="w-full">
                  <img
                    onClick={() => navigate(`/movies/${value?._id}`)}
                    className="w-full cursor-pointer h-[200px] min-[500px]:h-[250px] min-[768px]:h-[300px] min-[1024px]:h-[340px] object-cover rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:scale-105"
                    src={value?.posterUrl}
                    alt={value?.title}
                  />
                </div>
                <div className="flex flex-col gap-2 min-[600px]:gap-3 items-start p-2">
                  <div>
                    <h3 className="text-[15px] min-[500px]:text-[17px] min-[900px]:text-[19px] font-bold line-clamp-1">
                      {value?.title}
                    </h3>
                    <p className="text-[12px] min-[500px]:text-[13px] min-[900px]:text-[14px] font-medium text-gray-400 line-clamp-2">
                      {truncateTitle(value?.description, 4)}
                    </p>
                  </div>

                  <button
                    onClick={() => navigate(`/movies/${value?._id}`)}
                    className="filmBtn w-full bg-[#ffd700] text-[#000] text-[12px] min-[500px]:text-[13px] min-[900px]:text-[14px] font-medium rounded-[5px] h-[26px] min-[600px]:h-[28px] min-[900px]:h-[30px] flex items-center justify-center gap-1"
                  >
                    <Play
                      size={12}
                      className="min-[600px]:w-[13px] min-[600px]:h-[13px]"
                    />
                    Tomosha qilish
                  </button>
                </div>
              </div>
            ) : null,
          )}
        </div>
      </div>
    </section>
  );
}

export default PremyeraFilms;
