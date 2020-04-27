import {CardSuit, CardType} from '../types';

type SortOrder = {
  suits: CardSuit[];
  orderDirection: 'asc' | 'desc';
};
const SORT_ORDER1: SortOrder = {
  suits: ['Spades', 'Hearts', 'Clubs', 'Diamonds'],
  orderDirection: 'desc',
};

export const getCardScore = (card: CardType): number => {
  switch (card.value) {
    case 'Ace':
      return 14;
    case 'King':
      return 13;
    case 'Queen':
      return 12;
    case 'Jack':
      return 11;
    default:
      return +card.value;
  }
};

export const getSortedCards = (
  cards: CardType[],
  sortOrder: SortOrder = SORT_ORDER1
): CardType[] => {
  return [...cards].sort((cardA, cardB) => {
    const orderFactor = sortOrder.orderDirection === 'asc' ? 1 : -1;
    if (cardA.suit === cardB.suit) {
      return orderFactor * (getCardScore(cardA) - getCardScore(cardB));
    }

    return (
      orderFactor *
      (sortOrder.suits.indexOf(cardB.suit) -
        sortOrder.suits.indexOf(cardA.suit))
    );
  });
};
