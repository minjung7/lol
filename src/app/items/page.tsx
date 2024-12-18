import { fetchItemList } from "@/utils/serverApi";
import Image from "next/image";

export default async function ItemsPage() {
  const itemsData = await fetchItemList();
  const items = Object.entries(itemsData);

  return (
    <div className="p-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">아이템 목록</h1>
        <p className="text-lg text-gray-600 mt-2">
          게임 내 사용 가능한 다양한 아이템들을 확인해보세요.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {items.map(([id, item]) => (
          <div
            key={id}
            className="group cursor-pointer bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative w-full h-28 flex items-center justify-center overflow-hidden">
              <Image
                src={`https://ddragon.leagueoflegends.com/cdn/14.5.1/img/item/${id}.png`}
                alt={item.name}
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <div className="p-4 text-center">
              <h2 className="text-md font-bold text-gray-800 group-hover:text-lol-gold">
                {item.name}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
