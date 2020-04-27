import * as React from 'react';
import {CardType} from '../../types';
import {Card} from '../card';

type Props = {cards: CardType[]};

const styles = {
  hand: {
    position: 'relative' as 'relative',
    display: 'inline-block',
    height: '160px',
    width: '250px',
  },
  card: {
    display: 'inline-block',
    position: 'absolute' as 'absolute',
  },
};
const PlayerHand: React.FC<Props> = ({cards = []}) => {
  return (
    <div style={styles.hand}>
      {cards.map((card, i) => (
        <div
          key={`${card.value}_${card.suit}`}
          style={{...styles.card, left: `${i * 20}px`}}
        >
          <Card card={card} />
        </div>
      ))}
    </div>
  );
};

export default PlayerHand;
