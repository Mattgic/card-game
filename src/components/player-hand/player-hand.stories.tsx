import * as React from 'react';
import {withKnobs} from '@storybook/addon-knobs';
import {CardType} from '../../types';
import PlayerHand from './player-hand';
import {getSortedCards} from '../../model/cards';

export default {
  title: 'Player hand',
  component: PlayerHand,
  decorators: [withKnobs],
};

const playerHand: CardType[] = [
  {value: '5', suit: 'Spades'},
  {value: 'Ace', suit: 'Spades'},
  {value: '5', suit: 'Diamonds'},
  {value: '2', suit: 'Spades'},
  {value: '3', suit: 'Spades'},
  {value: 'King', suit: 'Clubs'},
  {value: '3', suit: 'Clubs'},
  {value: '10', suit: 'Spades'},
  {value: '3', suit: 'Hearts'},
  {value: '2', suit: 'Diamonds'},
  {value: '8', suit: 'Clubs'},
  {value: '7', suit: 'Clubs'},
  {value: '8', suit: 'Hearts'},
  {value: 'Queen', suit: 'Hearts'},
];
export const hand1 = () => <PlayerHand cards={playerHand} />;

export const sortedHand = () => (
  <PlayerHand cards={getSortedCards(playerHand)} />
);
