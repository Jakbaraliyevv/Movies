import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import logo from "../../../../public/logosvg.svg";
import { useAxios } from "../../../hooks";
import useNotification from "../../../generic";

function Login({ onSuccessLogin }) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const axios = useAxios();
  const notify = useNotification();

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const getData = () => {
    if (!email || !password) {
      setError("Barcha maydonlarni to‘ldiring!");
      return;
    }

    if (!validateEmail(email)) {
      setError("Email formati noto‘g‘ri!");
      return;
    }

    setError("");

    const data = { email, password };

    axios({
      method: "POST",
      url: "/auth/login",
      data,
    })
      .then((data) => {
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("token", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
        notify("login");
        onSuccessLogin();
      })
      .catch((error) => {
        console.log(error);
        notify("loginError");
      });
  };

  return (
    <section className="w-full p-6 rounded-lg bg-[rgb(17,7,31)] shadow-lg">
      <div className="mb-6">
        <div className="flex items-end gap-2">
          <img className="w-[30px]" src={logo} alt="logo" />
          <h1 className="text-[19px] text-white font-medium font-serif">
            Filmagnet
          </h1>
        </div>
        <p className="text-gray-400 text-sm mt-1">
          Tez va qulay ro'yxatdan o'ting
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {/* Email input */}
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
          className="w-full px-3 py-2 rounded-md bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-[#ffd700]"
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}{" "}
        {/* Xato xabar */}
        {/* Password input with toggle */}
        <div className="relative w-full">
          <input
            onChange={(e) => setPassword(e.target.value)}
            type={showPassword ? "text" : "password"}
            placeholder="Parol"
            className="w-full px-3 py-2 pr-10 rounded-md bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-[#ffd700]"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-white"
          >
            {showPassword ? (
              <EyeOff className="w-5 h-5" />
            ) : (
              <Eye className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Kirish button */}
      <button
        onClick={() => getData()}
        className="w-full mt-6 bg-[#ffd700] text-black py-2 rounded-md font-medium text-[19px] hover:bg-yellow-400 transition-colors duration-300"
      >
        Kirish
      </button>
    </section>
  );
}

export default Login;
