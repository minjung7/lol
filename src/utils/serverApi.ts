import { Champion, ChampionDetail } from "@/types/Champion";
import { Item } from "@/types/Item";
import { ChampionRotation } from "@/types/Rotation";

const DATA_DRAGON_URL = "https://ddragon.leagueoflegends.com";
const RIOT_API_BASE_URL = "https://kr.api.riotgames.com";
const RIOT_API_KEY = process.env.RIOT_API_KEY;

export async function fetchUpdatedVersion(): Promise<string> {
  try {
    const response = await fetch(
      "https://ddragon.leagueoflegends.com/api/versions.json"
    );
    if (!response.ok) {
      throw new Error("에러남");
    }
    const versions: string[] = await response.json();
    return versions[0];
  } catch (error) {
    console.log(error);
    throw new Error("버전 데이터를 가져오는 데 실패했습니다");
  }
}

export async function fetchChampionList(): Promise<{
  [key: string]: Champion;
}> {
  try {
    const UpdatedVersion = await fetchUpdatedVersion();

    const response = await fetch(
      `${DATA_DRAGON_URL}/cdn/${UpdatedVersion}/data/ko_KR/champion.json`
    );
    if (!response.ok) {
      throw new Error("챔피언 목록 데이터를 가져오는 데 실패했습니다.");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    throw new Error("챔피언 데이터를 가져오는 중 오류가 발생했습니다.");
  }
}

export async function fetchChampionDetail(id: string): Promise<ChampionDetail> {
  const UpdatedVersion = await fetchUpdatedVersion();

  const response = await fetch(
    `${DATA_DRAGON_URL}/cdn/${UpdatedVersion}/data/ko_KR/champion.json`
  );
  if (!response.ok) {
    throw new Error("버전 확인에 실패했습니다.");
  }
  const data = await response.json();

  return data.data[id];
}

export async function fetchItemList(): Promise<{ [key: string]: Item }> {
  const UpdatedVersion = await fetchUpdatedVersion();

  const response = await fetch(
    `${DATA_DRAGON_URL}/cdn/${UpdatedVersion}/data/ko_KR/item.json`
  );
  if (!response.ok) {
    throw new Error("아이템 데이터를 가져오는 데 실패했습니다.");
  }
  const data = await response.json();

  return data.data;
}

export default async function fetchChampionRotation(): Promise<ChampionRotation> {
  if (!RIOT_API_KEY) {
    throw new Error(`API 키가 정의되지 않았습니다`);
  }

  const response = await fetch(
    `${RIOT_API_BASE_URL}/lol/platform/v3/champion-rotations`,
    {
      headers: {
        "X-Riot-Token": RIOT_API_KEY,
      },
    }
  );

  if (!response.ok) {
    throw new Error("로테이션 로드에 실패했습니다.");
  }
  return response.json();
}
