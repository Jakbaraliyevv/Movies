// import { Dropdown, Space } from "antd";
// import { List } from "lucide-react";
// import Filter_catagory from "../../filter-catagory";
// import { useNavigate } from "react-router-dom";

// const items = [
//   { key: "1", label: "O'zbek filmlari", slug: "uzb" },
//   { key: "2", label: "K-dramalar", slug: "k-drama" },
//   { key: "3", label: "Multfilmlar", slug: "multfilmlar" },
//   { key: "4", label: "Rus filimlari", slug: "rus" },
//   { key: "4", label: "Hind filimlari", slug: "hind" },
// ];

// const ModalCatagory = () => {
//   const navigate = useNavigate(); // ✅ ichkarida bo‘lishi kerak

//   return (
//     <Space direction="vertical">
//       <Space wrap>
//         <Dropdown
//           placement="bottomLeft"
//           dropdownRender={() => (
//             <div className="bg-[rgb(26,11,46)] border-[1px] border-gray-500 text-white rounded shadow-md py-1">
//               {items.map((item) => (
//                 <div
//                   onClick={() => {
//                     // ✅ filter funksiyasiga slug berish yaxshiroq
//                     // Filter_catagory(item?.slug);
//                     navigate(`/filter-catagory/${item?.slug}`);
//                   }}
//                   key={item.key}
//                   className="px-4 py-2 hover:bg-gray-700 cursor-pointer text-[14px] font-medium"
//                 >
//                   {item?.label}
//                 </div>
//               ))}
//             </div>
//           )}
//         >
//           <div className="flex items-center gap-2 text-[19px] font-medium cursor-pointer border-[1px] border-gray-500 py-1 px-4 rounded-[5px] justify-center">
//             <List className="w-6 h-6 text-white" />
//             Kategoriya
//           </div>
//         </Dropdown>
//       </Space>
//     </Space>
//   );
// };

// export default ModalCatagory;

import { Dropdown, Space } from "antd";
import { List } from "lucide-react";
import Filter_catagory from "../../filter-catagory";
import { useNavigate } from "react-router-dom";

const items = [
  { key: "1", label: "O'zbek filmlari", slug: "uzb" },
  { key: "2", label: "K-dramalar", slug: "k-drama" },
  { key: "3", label: "Multfilmlar", slug: "multfilmlar" },
  { key: "4", label: "Rus filimlari", slug: "rus" },
  { key: "5", label: "Hind filimlari", slug: "hind" },
];

const ModalCatagory = () => {
  const navigate = useNavigate();

  return (
    <Space direction="vertical">
      <Space wrap>
        <Dropdown
          placement="bottomLeft"
          dropdownRender={() => (
            <div className="bg-[rgb(26,11,46)] border-[1px] border-gray-500 text-white rounded shadow-md py-1">
              {items.map((item) => (
                <div
                  onClick={() => {
                    navigate(`/filter-catagory/${item?.slug}`);
                  }}
                  key={item.key}
                  className="px-3 sm:px-4 py-2 hover:bg-gray-700 cursor-pointer text-[13px] sm:text-[14px] font-medium"
                >
                  {item?.label}
                </div>
              ))}
            </div>
          )}
        >
          <div className="flex items-center gap-1 sm:gap-2 text-[14px] sm:text-[16px] md:text-[19px] font-medium cursor-pointer border-[1px] border-gray-500 py-[4px] sm:py-1 px-2 sm:px-3 md:px-4 rounded-[5px] justify-center hover:border-[#ffd700] transition-colors">
            <List className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
            <span className="hidden min-[380px]:block">Kategoriya</span>
          </div>
        </Dropdown>
      </Space>
    </Space>
  );
};

export default ModalCatagory;
