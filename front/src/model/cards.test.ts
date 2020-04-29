import {getCardScore, getSortedCards} from './cards';
import {CardType} from '../types';

describe('getCardScore', () => {
  it('should return 3 for Three of Hearts', () => {
    expect(getCardScore({value: '3', suit: 'Hearts'})).toEqual(3);
  });
  it('should return 11 for Jack of Clubs', () => {
    expect(getCardScore({value: 'Jack', suit: 'Clubs'})).toEqual(11);
  });
  it('should return 14 for Ace of Diamonds', () => {
    expect(getCardScore({value: 'Ace', suit: 'Diamonds'})).toEqual(14);
  });
});

describe('getSortedCards', () => {
  it('should sort same suit cards', () => {
    const cards: CardType[] = [
      {value: '7', suit: 'Hearts'},
      {value: 'Jack', suit: 'Hearts'},
      {value: 'Ace', suit: 'Hearts'},
      {value: 'Queen', suit: 'Hearts'},
      {value: '4', suit: 'Hearts'},
    ];

    expect(getSortedCards(cards)).toEqual([
      {value: 'Ace', suit: 'Hearts'},
      {value: 'Queen', suit: 'Hearts'},
      {value: 'Jack', suit: 'Hearts'},
      {value: '7', suit: 'Hearts'},
      {value: '4', suit: 'Hearts'},
    ]);
  });

  it('should sort cards with different suits suit cards', () => {
    const cards: CardType[] = [
      {value: 'King', suit: 'Spades'},
      {value: '8', suit: 'Clubs'},
      {value: 'Jack', suit: 'Clubs'},
      {value: 'Jack', suit: 'Diamonds'},
      {value: '5', suit: 'Hearts'},
      {value: 'Ace', suit: 'Diamonds'},
      {value: '4', suit: 'Spades'},
    ];

    expect(getSortedCards(cards)).toEqual([
      {value: 'King', suit: 'Spades'},
      {value: '4', suit: 'Spades'},
      {value: '5', suit: 'Hearts'},
      {value: 'Jack', suit: 'Clubs'},
      {value: '8', suit: 'Clubs'},
      {value: 'Ace', suit: 'Diamonds'},
      {value: 'Jack', suit: 'Diamonds'},
    ]);
  });
});
