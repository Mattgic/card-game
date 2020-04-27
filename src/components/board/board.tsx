import * as React from 'react';
import {PlayerHand} from '../player-hand';
import {getSortedCards} from '../../model/cards';
import {CardType} from '../../types';

const cards: CardType[] = [
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

const styles = {
  board: {
    background: 'darkgreen',
    width: '100%',
    height: '100vh',
    padding: '30px',
    boxSizing: 'border-box' as 'border-box',
  },
  boardInside: {
    border: 'solid 2px yellow',
    width: '100%',
    height: '100%',
    position: 'relative' as 'relative',
  },
  footer: {
    position: 'absolute' as 'absolute',
    bottom: 0,
    width: '100%',
    margin: '0 auto',
  },
};
const Board: React.FC = () => {
  return (
    <div style={styles.board}>
      <div style={styles.boardInside}>
        <div style={styles.footer}>
          <PlayerHand cards={getSortedCards(cards)} />
        </div>
      </div>
    </div>
  );
};

export default Board;
