import axios from "axios";

export const useAxios = () => {
  const response = async ({ url, method = "GET", data, headers, params }) => {
    try {
      const res = await axios({
        url: `${import.meta.env.VITE_BASE_URL}${url}`,
        method,
        data,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
          ...headers,
        },
        params: {
          access_token: localStorage.getItem("token"),
          ...params,
        },
      });

      return res.data;
    } catch (error) {
      console.error("Axios Xatolik:", error);
      throw error;
    }
  };

  return response;
};




// {
//   "_id": "67177ba831b9d77f9d36e123",
//   "title": "Eshning Sarguzashtlari",
//   "description": "So‘nggi o‘ttiz yil davomida Esh dahshatli o‘liklar bilan bog‘liq xotiralardan qochishga harakat qildi...",
//   "year": 2015,
//   "country": ["AQSH", "Yangi Zenlandiya"],
//   "genres": ["Qo‘rqinchli", "Komediya", "Fantaziya", "Jangari"],
//   "videoUrl": "https://your-storage.com/movies/esh.mp4",
//   "posterUrl": "https://your-storage.com/movies/esh.jpg",
//   "likes": 0,
//   "dislikes": 0,
//   "views": 0,
//   "createdAt": "2025-09-09T09:09:41Z"
// }
