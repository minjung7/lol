import { fetchChampionDetail } from "@/utils/serverApi";


interface ChampionDetailPageProps {
  params: {
    id: string;
  };
}

export default async function ChampionDetailPage({
  params,
}: ChampionDetailPageProps) {
  const champion = await fetchChampionDetail(params.id);

return (
  <div
    className="h-screen bg-cover bg-center flex items-start"
    style={{
      backgroundImage: `url(https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg)`,
    }}
  >
    <div className="ml-16 mt-16 max-w-2xl">
      <p className="text-lol-gold text-3xl font-bold">{champion.title}</p>
      <h1 className="text-white text-5xl font-semibold mt-4">
        {champion.name}
      </h1>
      <p className="text-gray-200 text-lg mt-6">{champion.blurb}</p>
    </div>
  </div>
);
}
