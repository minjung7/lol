import { fetchChampionList } from "@/utils/serverApi";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 86400;
export default async function ChampionsPage() {

  const championsData = await fetchChampionList();
  const champions = Object.values(championsData);

  return (
    <div className="p-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">선택하세요</h1>
        <p className="text-lg text-gray-600 mt-2">
          140 여명의 챔피언 중 자신의 플레이 스타일에 어울리는 챔피언을
          찾아보세요.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {champions.map((champion) => {
          return (
            <Link href={`/champions/${champion.id}`} key={champion.id}>
              <div className="group cursor-pointer bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="relative w-full h-48">
                  <Image
                    src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`}
                    alt={champion.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
                <div className="p-4 text-center">
                  <h2 className="text-lg font-bold text-gray-800 group-hover:text-lol-gold">
                    {champion.name}
                  </h2>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
