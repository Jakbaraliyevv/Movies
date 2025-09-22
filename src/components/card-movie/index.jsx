import { useState, useEffect } from "react";
import { useAxios } from "../../hooks";
import { useNavigate } from "react-router-dom";
import { Loader2, Play } from "lucide-react";

function Card_movie() {
  const navigate = useNavigate();
  const axios = useAxios();

  const [data, setData] = useState([]);
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

  function truncateTitle(title, wordLimit = 4) {
    const words = title.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return title;
  }

  if (loading) {
    return (
      <section className="text-[#FFF]">
        {/* Loading indicator */}
        <div className="flex items-center justify-center mb-8 gap-3">
          <Loader2 size={28} className="animate-spin text-[#ffd700]" />
          <span className="text-[#ffd700] text-xl font-medium">
            Filmlar yuklanmoqda...
          </span>
        </div>

        <div className="grid grid-cols-4 gap-[24px]">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="w-full h-auto">
              <div className="w-full">
                <div className="w-full h-[340px] bg-gray-300/20 rounded-lg overflow-hidden shadow-md animate-pulse">
                  <div className="w-full h-full bg-gradient-to-r from-gray-300/10 via-gray-300/20 to-gray-300/10 animate-pulse"></div>
                </div>
              </div>

              <div className="flex flex-col gap-3 items-start p-2">
                <div className="w-full">
                  <div className="h-6 bg-gray-600/30 rounded mb-2 animate-pulse w-3/4"></div>
                  <div className="h-4 bg-gray-600/30 rounded animate-pulse w-full"></div>
                </div>

                <div className="w-full h-[30px] bg-[#ffd700]/30 rounded-[5px] animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="grid grid-cols-4 text-[#FFF] gap-[24px]">
      {data.map((value) =>
        value?.isPremiere ? (
          ""
        ) : (
          <div key={value?._id} className="w-full h-auto">
            <div className="w-full">
              <img
                onClick={() => navigate(`/movies/${value?._id}`)} // 👈 ID
                className="w-full cursor-pointer h-[340px] object-cover rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:scale-105"
                src={value?.posterUrl}
                alt={value?.title}
              />
            </div>
            <div className="flex flex-col gap-3 items-start p-2">
              <div>
                <h3 className="text-[19px] font-bold">{value?.title}</h3>
                <p className="text-[14px] font-medium text-gray-400">
                  {truncateTitle(value?.description, 4)}
                </p>
              </div>

              <button
                onClick={() => navigate(`/movies/${value?._id}`)} // 👈 ID
                className="filmBtn w-full bg-[#ffd700] text-[#000] text-[14px] font-medium rounded-[5px] h-[30px]  flex items-center justify-center gap-1"
              >
                <Play size={12} />
                Tomosha qilish
              </button>
            </div>
          </div>
        )
      )}
    </section>
  );
}

export default Card_movie;
