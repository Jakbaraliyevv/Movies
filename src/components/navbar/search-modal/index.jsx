import { useState } from "react";
import { Button, Modal } from "antd";
import { Search, X } from "lucide-react";

const SearchModal = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  return (
    <div>
      <Search
        onClick={() => setOpen(true)}
        size={27}
        className="text-[#FFF] cursor-pointer"
      />

      <Modal
        open={open}
        onCancel={() => setOpen(false)}
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
          onClick={() => setOpen(false)}
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
          placeholder="Qidiruv..."
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

        {/* Agar input bo‘sh bo‘lsa, text ko‘rsatiladi */}
        {text.trim() === "" && (
          <div className="text-center mt-[40px]">
            <p className="text-[17px] text-gray-500 font-medium">
              Qidiruv orqali o‘zingiz yoqtirgan barcha filmlarni topishingiz
              mumkin . . .
            </p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default SearchModal;
