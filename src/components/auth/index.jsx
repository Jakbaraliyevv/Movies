import { Modal } from "antd";
import { useState, useEffect } from "react";
import Login from "./login";
import Register from "./register";
import { X } from "lucide-react";

const AutComponents = ({ show, onClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [login, setLogin] = useState(true);

  useEffect(() => {
    if (show) {
      setIsModalOpen(true);
      setLogin(true);
    }
  }, [show]);

  const handleCancel = () => {
    setIsModalOpen(false);
    setLogin(true); // 🔑 yopilganda reset qilish
    onClose();
  };

  return (
    <Modal
      open={isModalOpen}
      onCancel={handleCancel}
      footer={null}
      closeIcon={<X className="text-white w-5 h-5" />}
      styles={{
        content: { backgroundColor: "rgb(17,7,31)", color: "#fff" },
        header: { backgroundColor: "rgb(17,7,31)", color: "#fff" },
      }}
    >  
      <div>
        <div className="flex items-center text-[19px] font-bold justify-center gap-[30px] text-white">
          <h2
            onClick={() => setLogin(true)}
            className={`cursor-pointer ${login ? "text-[#ffd700]" : ""}`}
          >
            LOGIN
          </h2>
          <span className="h-[20px] border-[1px] border-[#FFF]"></span>
          <h2
            onClick={() => setLogin(false)}
            className={`cursor-pointer ${!login ? "text-[#ffd700]" : ""}`}
          >
            REGISTER
          </h2>
        </div>
        <div className="mt-5">
          {" "}
          {login ? (
            <Login onSuccessLogin={handleCancel} />
          ) : (
            <Register onSuccessRegister={() => setLogin(true)} />
          )}
        </div>
      </div>
    </Modal>
  );
};

export default AutComponents;
