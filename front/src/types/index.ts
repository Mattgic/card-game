export type CardSuit = 'Spades' | 'Hearts' | 'Clubs' | 'Diamonds';
export type CardValue =
  | 'Ace'
  | 'King'
  | 'Queen'
  | 'Jack'
  | '10'
  | '9'
  | '8'
  | '7'
  | '6'
  | '5'
  | '4'
  | '3'
  | '2';

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

export type PlayerHand = CardType[];
