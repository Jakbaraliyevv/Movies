import { Button, Modal } from "antd";
import { useState } from "react";
import Login from "./login";
import { Type, X } from "lucide-react";
import Register from "./register";
const AutComponents = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <button
        onClick={showModal}
        className="relative overflow-hidden text-white w-[150px] py-[7px] text-[19px] font-medium rounded-full border border-[#ffd700] group"
      >
        <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
          Kirish
        </span>
        <span className="absolute top-0 left-0 w-0 h-full bg-[#ffd700] transition-all duration-500 ease-in-out rounded-full group-hover:w-full"></span>
      </button>
      <Modal
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        closeIcon={<X className="text-white w-5 h-5" />} // ❌ oq rangli close
        styles={{
          content: { backgroundColor: "rgb(17,7,31)", color: "#fff" },
          header: { backgroundColor: "rgb(17,7,31)", color: "#fff" },
        }}
      >
        <div>
          <div className="flex items-center text-[19px] font-bold justify-center gap-[30px] text-white">
            <h2 className="cursor-pointer">LOGIN</h2>
            <span className="h-[20px] border-[1px] border-[#FFF]"></span>
            <h2 className="cursor-pointer">REGISTER</h2>
          </div>
          <div>
            <Register />
          </div>
        </div>
      </Modal>
    </>
  );
};
export default AutComponents;
