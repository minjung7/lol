// Champion: 챔피언 목록에서 사용하는 기본 정보 타입.
// ChampionDetail: 챔피언 상세 정보에 사용하는 타입.

// Riot의 Data Dragon API에서 제공하는 챔피언 데이터 구조를 참고하세요.
// 필요한 경우 타입을 확장하거나 새로운 인터페이스를 생성할 수 있습니다.

export interface Champion {
  id: string;
  key: string;
  name: string;
  title: string;
  tags: string[];
  image: {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  };
}

export interface ChampionDetail extends Champion {
  blurb: string;
  info: {
    attack: number;
    defense: number;
    magic: number;
    difficulty: number;
  };
  partype: string;
  stats: {
    hp: number;
    hpperlevel: number;
    mp: number;
    mpperlevel: number;
    movespeed: number;
    armor: number;
    armorperlevel: number;
    spellblock: number;
    spellblockperlevel: number;
    attackrange: number;
    hpregen: number;
    hpregenperlevel: number;
    mpregen: number;
    mpregenperlevel: number;
    crit: number;
    critperlevel: number;
    attackdamage: number;
    attackdamageperlevel: number;
    attackspeedperlevel: number;
    attackspeed: number;
  };
}
