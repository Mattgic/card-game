import * as React from 'react';
import {PlayingCard} from '.';
import {select, withKnobs} from '@storybook/addon-knobs';
import {CardSuit, CardValue} from '../../types';

export default {
  title: 'Card',
  component: PlayingCard,
  decorators: [withKnobs],
};

export const aceOfHearts = () => <PlayingCard card={{value: 'Ace', suit: 'Hearts'}} />;

export const twoOfSpades = () => <PlayingCard card={{value: '2', suit: 'Spades'}} />;

export const queenOfClubs = () => (
  <PlayingCard card={{value: 'Queen', suit: 'Clubs'}} />
);

const ALL_CARDSUITS: CardSuit[] = ['Spades', 'Hearts', 'Clubs', 'Diamonds'];

const ALL_CARDVALUES: CardValue[] = [
  'Ace',
  'King',
  'Queen',
  'Jack',
  '10',
  '9',
  '8',
  '7',
  '6',
  '5',
  '4',
  '3',
  '2',
];
export const playground = () => (
  <PlayingCard
    card={{
      value: select('Card value', ALL_CARDVALUES, 'King'),
      suit: select('Card suit', ALL_CARDSUITS, 'Spades'),
    }}
  />
);
