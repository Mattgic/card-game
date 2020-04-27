import * as React from 'react';
import {withKnobs} from '@storybook/addon-knobs';
import {CardType} from '../../types';
import PlayerHand from './player-hand';

export default {
  title: 'Player hand',
  component: PlayerHand,
  decorators: [withKnobs],
};

const playerHand: CardType[] = [
  {value: 'Ace', suit: 'Hearts'},
  {value: 'Three', suit: 'Diamonds'},
  // {value: 'Queen', suit: 'Hearts'},
  {value: 'Nine', suit: 'Spades'},
  // {value: 'Seven', suit: 'Clubs'},
  // {value: 'Eight', suit: 'Spades'},
  // {value: 'Nine', suit: 'Spades'},
  // {value: 'Four', suit: 'Diamonds'},
];
export const hand1 = () => <PlayerHand cards={playerHand} />;
