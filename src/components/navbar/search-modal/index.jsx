import { useState, useEffect } from "react";
import { Modal } from "antd";
import { Search, X } from "lucide-react";
import { useAxios } from "../../../hooks";
import { useNavigate } from "react-router-dom";

const SearchModal = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const axios = useAxios(); // Hook'ni faqat bir marta chaqiring

  useEffect(() => {
    if (!open) return;
    if (text.trim() === "") {
      setResults([]);
      setLoading(false);
      return;
    }

    const controller = new AbortController();
    const delay = setTimeout(async () => {
      setLoading(true);

      try {
        const res = await axios({
          url: `/movies/search?q=${encodeURIComponent(text.trim())}`,
          method: "GET",
          signal: controller.signal,
        });

        console.log("✅ Search response:", res);
        if (Array.isArray(res)) setResults(res);
        else setResults([]);
      } catch (err) {
        if (err.name !== "CanceledError") {
          console.error("❌ Search error:", err);
        }
        setResults([]);
      } finally {
        setLoading(false);
      }
    }, 300);

    return () => {
      clearTimeout(delay);
      controller.abort();
    };
  }, [text, open]);

  // Modalni yopish va state reset qilish
  const handleClose = () => {
    setOpen(false);
    setText("");
    setResults([]);
    setLoading(false);
  };

  return (
    <div>
      {/* 🔍 Search ikonka */}
      <Search
        onClick={() => setOpen(true)}
        size={27}
        className="text-[#FFF] cursor-pointer"
      />

      {/* Modal */}
      <Modal
        open={open}
        onCancel={handleClose}
        footer={null}
        centered
        width={1000}
        closable={false}
        styles={{
          content: {
            backgroundColor: "rgb(26,11,46)",
            color: "#fff",
            borderRadius: "12px",
            minHeight: "290px",
            position: "relative",
          },
          header: {
            display: "none",
          },
        }}
      >
        {/* X tugma */}
        <button
          onClick={handleClose}
          style={{
            position: "absolute",
            top: "12px",
            right: "12px",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            color: "#fff",
          }}
        >
          <X size={24} />
        </button>

        {/* Qidiruv input */}
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="Film nomi, janr, mamlakat..."
          style={{
            width: "100%",
            padding: "12px 16px",
            fontSize: "16px",
            border: "1px solid #ffd700",
            borderRadius: "8px",
            backgroundColor: "rgb(26,11,46)",
            color: "#fff",
            outline: "none",
            marginTop: "24px",
          }}
        />

        {/* Loading indikator */}
        {loading && (
          <p className="text-white mt-4 text-center">Qidirilmoqda...</p>
        )}

        {/* Natijalar */}
        {!loading && results?.length > 0 && (
          <div className="mt-4">
            <p className="text-gray-300 mb-3">
              {results?.length} ta natija topildi
            </p>
            <ul
              className="max-h-[400px] overflow-y-auto"
              style={{ padding: 0, listStyle: "none" }}
            >
              {results?.map((movie) => (
                <li
                  key={movie?._id}
                  className="flex items-center mb-3 gap-3 cursor-pointer hover:bg-gray-700 p-2 rounded transition-colors"
                  onClick={() => {
                    console.log("Selected movie:", movie?.title);
                    navigate(`/movies/${movie?._id}`);
                    handleClose();
                  }}
                >
                  <img
                    src={movie.posterUrl}
                    alt={movie.title}
                    className="w-12 h-16 object-cover rounded"
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/48x64?text=No+Image";
                    }}
                  />
                  <div>
                    <p className="font-medium">{movie.title}</p>
                    <p className="text-sm text-gray-400">
                      {movie.year} • {movie.genres}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Input bo'sh bo'lsa */}
        {!loading && text.trim() === "" && results.length === 0 && (
          <div className="text-center mt-[40px]">
            <Search size={48} className="text-gray-500 mx-auto mb-4" />
            <p className="text-[17px] text-gray-500 font-medium">
              Qidiruv orqali o'zingiz yoqtirgan barcha filmlarni topishingiz
              mumkin...
            </p>
          </div>
        )}

        {/* Natija topilmasa */}
        {!loading && text.trim() !== "" && results.length === 0 && (
          <div className="text-center mt-[40px]">
            <X size={48} className="text-red-500 mx-auto mb-4" />
            <p className="text-[17px] text-red-500 font-medium">
              "{text}" uchun natija topilmadi
            </p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default SearchModal;
