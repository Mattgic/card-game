import * as React from 'react';
import {useDrop} from 'react-dnd';
import {CardType} from '../../types';
import {PlayingCard} from '../playing-card';
import {Overlay} from '../overlay';
import {useReducer, useRef} from 'react';

type Props = {cards: CardType[]};

const styles = {
  hand: {
    position: 'relative' as 'relative',
    display: 'inline-block',
    height: '180px',
    width: '250px',
  },
  card: {
    display: 'inline-block',
    position: 'absolute' as 'absolute',
  },
};

type Props2 = {
  cardIndex: number;
  isSelected: boolean;
  children: React.ReactNode;
  moveCardToIndex: (card: CardType, destCardIndex: number) => void;
};
const HandCard: React.FC<Props2> = ({
  cardIndex,
  isSelected,
  children,
  moveCardToIndex,
}) => {
  const focusRef = useRef(null);
  const [{isOver, canDrop}, drop] = useDrop({
    accept: 'playing-card',
    drop: (e) => {
      moveCardToIndex((e as any).card, cardIndex);
      if (focusRef && focusRef.current) {
        console.log('el', (focusRef.current as any).querySelector('img'));
      }
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  });
  return (
    <div ref={focusRef}>
      <div
        className={isSelected ? 'selected' : 'notselected'}
        ref={drop}
        style={{
          ...styles.card,
          left: `${cardIndex * 30}px`,
          top: isSelected ? '0' : '20px',
        }}
      >
        {children}
        {isOver && canDrop && <Overlay color="green" />}
      </div>
    </div>
  );
};

type State = {playerHand: CardType[]; selectedCardIndex: number};
const myReducer = (
  state: State,
  action: {type: string; [key: string]: any}
): State => {
  switch (action.type) {
    case 'setPlayerHand':
      return {selectedCardIndex: -1, playerHand: action.cards};
    case 'selectCard':
      return {...state, selectedCardIndex: action.cardIndex};
    default:
      return state;
  }
};
const PlayerHand: React.FC<Props> = ({cards = []}) => {
  const [{playerHand, selectedCardIndex}, dispatch] = useReducer(myReducer, {
    playerHand: cards,
    selectedCardIndex: -1,
  });
  React.useEffect(() => {
    dispatch({type: 'setPlayerHand', cards});
  }, [cards]);

  const selectCard = (cardIndex: number) =>
    dispatch({
      type: 'selectCard',
      cardIndex: selectedCardIndex === cardIndex ? -1 : cardIndex,
    });

  const moveCardToIndex = (card: CardType, destCardIndex: number) => {
    const movedCardIndex = playerHand.findIndex(
      (_card) => _card.suit === card.suit && _card.value === card.value
    );
    if (movedCardIndex === destCardIndex) return;
    const newPlayerHand = [...playerHand];
    newPlayerHand.splice(
      destCardIndex,
      0,
      ...newPlayerHand.splice(movedCardIndex, 1)
    );
    dispatch({type: 'setPlayerHand', cards: newPlayerHand});
    console.log('document.activeElement', document.activeElement);
  };

  return (
    <div style={styles.hand}>
      {playerHand.map((card, cardIndex) => {
        return (
          <HandCard
            key={`${card.value}_${card.suit}`}
            cardIndex={cardIndex}
            isSelected={cardIndex === selectedCardIndex}
            moveCardToIndex={moveCardToIndex}
          >
            <PlayingCard card={card} onClick={() => selectCard(cardIndex)} />
          </HandCard>
        );
      })}
    </div>
  );
};

export default PlayerHand;
