"use client";

import { Champion } from "@/types/Champion";
import { ChampionRotation } from "@/types/Rotation";
import { fetchChampionList } from "@/utils/serverApi";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";

const fetchChampionRotation = async (): Promise<ChampionRotation> => {
  const response = await fetch("/api/rotation");
  if (!response.ok) throw new Error("로테이션 데이터를 가져오지 못했습니다.");
  return response.json();
};

export default function RotationPage() {

  const {
    data: rotationData,
    isLoading: rotationLoading,
    isError: rotationError,
  } = useQuery<ChampionRotation>({
    queryKey: ["championRotation"],
    queryFn: fetchChampionRotation,
    staleTime: 1000 * 60 * 5, 
  });


  const {
    data: championData,
    isLoading: championLoading,
    isError: championError,
  } = useQuery<{
    [key: string]: Champion;
  }>({
    queryKey: ["championList"],
    queryFn: fetchChampionList,
    staleTime: 1000 * 60 * 5, 
  });


  if (rotationLoading || championLoading)
    return <div className="text-center text-gray-600">로딩중입니다...</div>;

  if (rotationError || championError)
    return (
      <div className="text-center text-red-600">
        데이터를 불러오는 중 오류가 발생했습니다.
      </div>
    );

  if (!rotationData || !championData) return null;


  const rotationChampions = rotationData.freeChampionIds.map((id) => {
    const champion = Object.values(championData).find(
      (champion: Champion) => parseInt(champion.key, 10) === id
    );
    return champion;
  });

  return (
    <div className="p-8">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-800">챔피언 로테이션</h2>
        <p className="text-lg text-gray-600 mt-2">
          이번주 무료로 플레이할 수 있는 챔피언들을 확인해보세요.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {rotationChampions.map(
          (champion) =>
            champion && (
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
            )
        )}
      </div>
    </div>
  );
}
