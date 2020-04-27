import {CardType} from '../types';

export const getCardScore = (card: CardType): number => {
  switch (card.value) {
    case 'Ace':
      return 1;
  }
};
