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
  {value: 'Ace', suit: 'Hearts'},
  {value: '3', suit: 'Diamonds'},
  {value: 'Queen', suit: 'Hearts'},
  {value: '9', suit: 'Spades'},
  {value: '7', suit: 'Clubs'},
  {value: '8', suit: 'Spades'},
  {value: '5', suit: 'Spades'},
  {value: '4', suit: 'Diamonds'},
];
export const hand1 = () => <PlayerHand cards={playerHand} />;

export const sortedHand = () => (
  <PlayerHand cards={getSortedCards(playerHand)} />
);
