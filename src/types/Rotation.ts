// ChampionRotation: 챔피언 로테이션 응답 데이터 타입.

// Riot API 문서에서 챔피언 로테이션 엔드포인트의 응답 구조를 확인하세요.
// 숫자 배열과 같은 기본 타입을 정확히 명시하세요.
// 만약, API 문서에서 원하는 값을 제대로 찾지 못한다면, 6번을 먼저 구현해보시고 응답값을 확인하면서 타입을 완성해보세요.

export interface ChampionRotation {
  maxNewPlayerLevel: number;
  freeChampionIdsForNewPlayers: number[];
  freeChampionIds: number[];
}