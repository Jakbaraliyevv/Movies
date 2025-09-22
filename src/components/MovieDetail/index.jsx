import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAxios } from "../../hooks";
import {
  Calendar,
  Clock,
  Eye,
  MapPin,
  Play,
  ThumbsDown,
  ThumbsUp,
} from "lucide-react";

function MovieDetail() {
  const { id } = useParams();
  const axios = useAxios();
  const [movie, setMovie] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    axios({ url: `/movies/${id}`, method: "GET" })
      .then((res) => setMovie(res))
      .catch((err) => console.error(err));

    axios({ url: `/movies`, method: "GET" })
      .then((res) => setData(res))
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <div className="min-h-screen bg-[rgb(17,7,31)] text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-2/3">
            <div className="relative mb-6">
              <div className="aspect-video bg-black rounded-xl overflow-hidden border-2 border-[#ffd700]/30 shadow-2xl">
                <iframe
                  width="100%"
                  height="100%"
                  src={movie?.videoUrl}
                  title={movie?.title}
                  frameBorder="0"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>

              {/* Video overlay info */}
              <div className="absolute bottom-4 left-4 right-4 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-lg">
                <div className="flex items-center gap-2 text-[#ffd700] mb-2">
                  <Play size={16} />
                  <span className="text-sm font-medium">Hozir ko'rilmoqda</span>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h1 className="text-3xl lg:text-4xl font-bold text-[#ffd700] mb-3 leading-tight">
                {movie?.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-gray-300 mb-4">
                <div className="flex items-center gap-1">
                  <Calendar size={16} className="text-[#ffd700]" />
                  <span>{movie?.year}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={16} className="text-[#ffd700]" />
                  <span>{movie?.country}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Eye size={16} className="text-[#ffd700]" />
                  <span>{movie?.views || "0"}</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#ffd700]/10 to-transparent p-6 rounded-xl border-l-4 border-[#ffd700] mb-6">
              <div className="flex items-start gap-4">
                <h3 className="text-xl font-semibold text-[#ffd700] mb-3">
                  Janre :
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {movie?.genres}
                </p>
              </div>
              <div className="flex items-start gap-4">
                <h3 className="text-xl font-semibold text-[#ffd700] mb-3">
                  Tavsif:
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {movie?.description ||
                    "Bu ajoyib filmda hayotning eng qiziqarli va hayajonli lahzalari aks etgan. Bosh qahramon o'zining eng qiyin sinovi bilan duch keladi va bu uning butun hayotini o'zgartiradi. Spektakl va hissiyotlar bilan to'la bu film sizni boshidan oxirigacha qiziqtirib turadi."}
                </p>
              </div>
            </div>

            <div className="flex items-end justify-between mb-6">
              <div className="flex items-center  w-[300px] h-[20px] bg-gradient-to-br from-[#ffd700]/20 to-[#ffd700]/5 p-4 rounded-md border border-[#ffd700]/30 text-center">
                <div className="cursor-pointer flex items-center justify-center flex-1 gap-2">
                  <h3 className="flex items-center gap-2">
                    <Clock />
                    Yuklangan vaqti:
                  </h3>
                  <div className="text-md font-bold text-white">
                    {movie?.createdAt
                      ? new Date(movie?.createdAt)?.toLocaleDateString("uz-UZ")
                      : "Ma'lumot yo'q"}
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center w-[160px] h-[50px] bg-gradient-to-br from-[#ffd700]/20 to-[#ffd700]/5 p-4 rounded-xl border border-[#ffd700]/30 text-center">
                <div className="cursor-pointer flex items-center justify-center flex-1 gap-2">
                  <ThumbsUp size={24} className="text-[#ffd700]" />
                  <div className="text-xl font-bold text-white">
                    {movie?.likes || "0"}
                  </div>
                </div>

                <div className="w-[1px] bg-[#ffd700] h-full mx-2"></div>

                <div className="cursor-pointer flex items-center justify-center flex-1 gap-2">
                  <ThumbsDown size={24} className="text-[#ffd700]" />
                  <div className="text-xl font-bold text-white">
                    {movie?.dislikes || "0"}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/3">
            <div className="sticky top-6">
              <div className="h-[80vh] overflow-y-auto scrollbar-thin scrollbar-thumb-[#ffd700]/50 scrollbar-track-transparent">
                <div className="space-y-4 pr-2">
                  {data?.map((relatedMovie) => (
                    <div
                      key={relatedMovie?._id}
                      className="group bg-gradient-to-r from-[#ffd700]/10 to-transparent p-4 rounded-xl border border-[#ffd700]/20 hover:border-[#ffd700]/50 transition-all duration-300 cursor-pointer hover:scale-[1.02] hover:shadow-lg hover:shadow-[#ffd700]/20"
                      onClick={() =>
                        (window.location.href = `/movies/${relatedMovie?._id}`)
                      }
                    >
                      <div className="flex gap-4">
                        <div className="relative flex-shrink-0">
                          <img
                            src={
                              relatedMovie?.posterUrl ||
                              `https://picsum.photos/120/90?random=${relatedMovie?._id}`
                            }
                            alt={relatedMovie?.title}
                            className="w-20 h-16 object-cover rounded-lg border-2 border-[#ffd700]/30 group-hover:border-[#ffd700] transition-all duration-300"
                          />
                          <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <Play size={16} className="text-[#ffd700]" />
                          </div>
                        </div>

                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-white group-hover:text-[#ffd700] transition-colors duration-300 line-clamp-2 mb-1">
                            {relatedMovie?.title}
                          </h4>
                          <div className="flex items-center gap-2 text-sm text-gray-400 mb-1">
                            <span>{relatedMovie?.year}</span>
                            <span>•</span>
                            <span>{relatedMovie?.country}</span>
                          </div>
                          <div className="flex items-center gap-4 text-xs text-gray-500"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
