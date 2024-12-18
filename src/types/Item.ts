// Item: 아이템 목록에서 사용하는 기본 정보 타입.

// Data Dragon API의 아이템 데이터 구조를 참고하세요.
// 아이템의 가격 정보와 스탯 정보를 포함하도록 타입을 정의하세요.

export interface Item {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  into: string[];
  image: {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  };
  gold: {
    base: number;
    purchasable: boolean;
    total: number;
    sell: number;
  };
  tags: string[];
};