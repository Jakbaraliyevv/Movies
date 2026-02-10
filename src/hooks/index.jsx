// import axios from "axios";

// export const useAxios = () => {
//   const response = async ({ url, method = "GET", data, headers, params }) => {
//     try {
//       const res = await axios({
//         url: `${import.meta.env.VITE_BASE_URL}${url}`,
//         method,
//         data,
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//           "Content-Type": "application/json",
//           ...headers,
//         },
//         params, // 🔥 faqat kerak bo‘lsa foydalansin
//       });

//       return res.data;
//     } catch (error) {
//       console.error("Axios Xatolik:", error.response?.data || error.message);
//       throw error;
//     }
//   };

//   return response;
// };

// import axios from "axios";

// export const useAxios = () => {
//   const response = async ({ url, method = "GET", data, headers, params }) => {
//     try {
//       const res = await axios({
//         url: `${import.meta.env.VITE_BASE_URL}${url}`,
//         method,
//         data,
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//           "Content-Type": "application/json",
//           ...headers,
//         },
//         params,
//       });

//       return res.data;
//     } catch (error) {
//       // ❌ Agar token muddati tugagan bo‘lsa (401 qaytsa)
//       if (error.response && error.response.status === 401) {
//         localStorage.removeItem("token");
//         localStorage.removeItem("expireTime"); // agar ishlatayotgan bo‘lsangiz
//         // 🔄 login pagega yo‘naltirish
//         // window.location.href = "/";
//       }

//       console.error("Axios Xatolik:", error.response?.data || error.message);
//       throw error;
//     }
//   };

//   return response;
// };

import axios from "axios";

export const useAxios = () => {
  const response = async ({ url, method = "GET", data, headers, params }) => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios({
        url: `${import.meta.env.VITE_BASE_URL}${url}`,
        method,
        data,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          ...headers,
        },
        params,
      });

      return res.data;
    } catch (error) {
      // Agar 401 qaytsa, tokenni yangilaymiz
      if (error.response && error.response.status === 401) {
        const refreshToken = localStorage.getItem("refreshToken");
        if (refreshToken) {
          try {
            const refreshRes = await axios.post(
              `${import.meta.env.VITE_BASE_URL}/auth/refresh`,
              { refreshToken }
            );

            const newToken = refreshRes.data.accessToken;
            localStorage.setItem("token", newToken);

            // qayta so‘rov
            const retryRes = await axios({
              url: `${import.meta.env.VITE_BASE_URL}${url}`,
              method,
              data,
              headers: {
                Authorization: `Bearer ${newToken}`,
                "Content-Type": "application/json",
                ...headers,
              },
              params,
            });
            return retryRes.data;
          } catch (refreshError) {
            localStorage.removeItem("token");
            localStorage.removeItem("refreshToken");
            window.location.href = "/";
          }
        } else {
          localStorage.removeItem("token");
          localStorage.removeItem("refreshToken");
          window.location.href = "/";
        }
      }

      console.error("Axios xatolik:", error.response?.data || error.message);
      throw error;
    }
  };

  return response;
};
