// import { Button, Dropdown, Space } from "antd";
// import { List } from "lucide-react";
// const items = [
//   {
//     key: "1",
//     label: (
//       <a
//         target="_blank"
//         rel="noopener noreferrer"
//         href="https://www.antgroup.com"
//       >
//         O'zbek filimlari
//       </a>
//     ),
//   },
//   {
//     key: "2",
//     label: (
//       <a
//         target="_blank"
//         rel="noopener noreferrer"
//         href="https://www.aliyun.com"
//       >
//         K-daramalar
//       </a>
//     ),
//   },
//   {
//     key: "3",
//     label: (
//       <a
//         target="_blank"
//         rel="noopener noreferrer"
//         href="https://www.luohanacademy.com"
//       >
//         Multfilimlar
//       </a>
//     ),
//   },
//   {
//     key: "4",
//     label: (
//       <a
//         target="_blank"
//         rel="noopener noreferrer"
//         href="https://www.luohanacademy.com"
//       >
//         Animelar
//       </a>
//     ),
//   },
// ];
// const ModalCatagory = () => (
//   <Space direction="vertical">
//     <Space wrap>
//       <Dropdown menu={{ items }} placement="bottomLeft" >
//         <div className="flex items-center gap-2 text-[19px] font-medium cursor-pointer border-[1px] border-gray-500 py-1 px-4 rounded-[5px] justify-center">
//           <List className="w-6 h-6" />
//           Kategoria
//         </div>
//       </Dropdown>
//     </Space>
//   </Space>
// );
// export default ModalCatagory;

import { Dropdown, Space } from "antd";
import { List } from "lucide-react";

const items = [
  { key: "1", label: "O'zbek filimlari" },
  { key: "2", label: "K-dramalar" },
  { key: "3", label: "Multfilmlar" },
  { key: "4", label: "Animelar" },
];

const ModalCatagory = () => (
  <Space direction="vertical">
    <Space wrap>
      <Dropdown
        placement="bottomLeft"
        dropdownRender={() => (
          <div className="bg-[rgb(30,34,43);] border-[1px] border-gray-500 text-white rounded shadow-md py-1">
            {items.map((item) => (
              <div
                key={item.key}
                className="px-4 py-2 hover:bg-gray-700 cursor-pointer text-[14px] font-medium"
              >
                {item.label}
              </div>
            ))}
          </div>
        )}
      >
        <div className="flex items-center gap-2 text-[19px] font-medium cursor-pointer border-[1px] border-gray-500 py-1 px-4 rounded-[5px] justify-center">
          <List className="w-6 h-6 text-white" />
          Kategoria
        </div>
      </Dropdown>
    </Space>
  </Space>
);

export default ModalCatagory;
