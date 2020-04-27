import * as React from 'react';
import {Card} from '.';
import {select, withKnobs} from '@storybook/addon-knobs';
import {CardSuit, CardValue} from '../../types';

export default {
  title: 'Card',
  component: Card,
  decorators: [withKnobs],
};

export const aceOfHearts = () => <Card card={{value: 'Ace', suit: 'Hearts'}} />;

export const queenOfClubs = () => (
  <Card card={{value: 'Queen', suit: 'Clubs'}} />
);

const ALL_CARDSUITS: CardSuit[] = ['Spades', 'Hearts', 'Clubs', 'Diamonds'];

const ALL_CARDVALUES: CardValue[] = [
  'Ace',
  'King',
  'Queen',
  'Jack',
  'Ten',
  'Nine',
  'Eight',
  'Seven',
  'Six',
  'Five',
  'Four',
  'Three',
  'Two',
];
export const playground = () => (
  <Card
    card={{
      value: select('Card value', ALL_CARDVALUES, 'King'),
      suit: select('Card suit', ALL_CARDSUITS, 'Spades'),
    }}
  />
);
