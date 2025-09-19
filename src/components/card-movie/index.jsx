import film_img from "../../assets/film_img1.png";

function Card_movie() {
  const data = [
    {
      id: 1,
      images: film_img,
      name: "Sevgi va Sadoqat",
      title:
        "Ikki qalb orasidagi chuqur sevgi va sadoqat haqida ta'sirli hikoya. Drama janri.",
    },
    {
      id: 2,
      images: film_img,
      name: "Jangchi Qahramon",
      title:
        "Yovuz kuchlarga qarshi kurashayotgan jasur jangchi haqida hayajonli film. Action janri.",
    },
    {
      id: 3,
      images: film_img,
      name: "Sirli Sayohat",
      title:
        "Sirli voqealar bilan to‘la uzoq sayohat va kashfiyotlar haqida sarguzasht. Adventure janri.",
    },
    {
      id: 4,
      images: film_img,
      name: "Kulgili Kunlar",
      title:
        "Do‘stlar orasidagi kulgili voqealar va ajoyib lahzalar haqida komediya filmi.",
    },
  ];

  function truncateTitle(title, wordLimit = 4) {
    const words = title.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return title;
  }
  return (
    <section className="grid grid-cols-4 text-[#FFF]  gap-[24px]">
      {data.map((value) => (
        <div key={value?.id} className="w-full h-auto">
          <div className="w-full">
            <img
              className="w-full cursor-pointer h-[340px] object-cover rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:scale-105"
              src={value?.images}
              alt="This is image"
            />
          </div>
          <div className="flex flex-col gap-3 items-start p-2">
            <div>
              <h3 className="text-[19px] font-bold">{value?.name}</h3>
              <p className="text-[14px] font-medium text-gray-400">
                {truncateTitle(value?.title, 4)}
              </p>
            </div>

            <button className="filmBtn w-full bg-[#ffd700] text-[#000] text-[14px] font-medium rounded-[5px] h-[30px]">
              ▶ Tomosha qilish
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Card_movie;
