export type CardSuit = 'Spades' | 'Hearts' | 'Clubs' | 'Diamonds';
export type CardValue =
  | 'Ace'
  | 'King'
  | 'Queen'
  | 'Jack'
  | 'Ten'
  | 'Nine'
  | 'Eight'
  | 'Seven'
  | 'Six'
  | 'Five'
  | 'Four'
  | 'Three'
  | 'Two';

export enum CardSuitEnum {
  Spades = 'Spades',
  Hearts = 'Hearts',
  Clubs = 'Clubs',
  Diamonds = 'Diamonds',
}

export enum CardValueEnum {
  'Ace' = 14,
  'King' = 13,
  'Queen' = 12,
  'Jack' = 11,
  'Ten' = 10,
  'Nine' = 9,
  'Eight' = 8,
  'Seven' = 7,
  'Six' = 6,
  'Five' = 5,
  'Four' = 4,
  'Three' = 3,
  'Two' = 2,
}
export type CardType = {
  value: CardValue;
  suit: CardSuit;
};
