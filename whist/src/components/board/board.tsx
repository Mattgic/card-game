/** @jsx jsx */
import {jsx} from '@emotion/core';

import * as React from 'react';
import {PlayerHand} from '../player-hand';
import {getSortedCards} from '../../model/cards';
import {CardType} from '../../types';

import styled from '@emotion/styled';

const Button = styled.button`
  border-radius: 15px;
  background: darkred;
  color: white;
  font-weight: bold;
  font-size: 20px;
  padding: 15px 20px;
  margin: 10px;
`;

const cards: CardType[] = [
  {value: '5', suit: 'Spades'},
  {value: 'Queen', suit: 'Spades'},
  {value: '9', suit: 'Spades'},
  {value: '2', suit: 'Spades'},
  {value: '3', suit: 'Spades'},
  {value: 'Jack', suit: 'Spades'},
  {value: '6', suit: 'Spades'},
  {value: '8', suit: 'Spades'},
  {value: 'Ace', suit: 'Spades'},
  {value: '7', suit: 'Spades'},
  {value: 'King', suit: 'Spades'},
  {value: '4', suit: 'Spades'},
  {value: '10', suit: 'Spades'},
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
    display: 'flex',
    justifyContent: 'space-between',
    bottom: 0,
    width: '100%',
    height: '200px',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    height: '100%',
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: '30px',
    borderRadius: '15px',
    background: 'darkred',
  },
};
const Board: React.FC = () => {
  const [playerHand, setPlayerHand] = React.useState(cards);
  return (
    <div style={styles.board}>
      <div style={styles.boardInside}>
        <div style={styles.footer}>
          <div css={{paddingLeft: '100px'}}>
            <PlayerHand cards={playerHand} />
          </div>
          <div style={styles.buttons}>
            <Button onClick={() => setPlayerHand(getSortedCards(playerHand))}>
              AutoSort
            </Button>
            <Button>Play</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
