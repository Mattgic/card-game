import * as React from 'react';
import {CardType} from '../../types';
import {Card} from '../card';

type Props = {cards: CardType[]};

const PlayerHand: React.FC<Props> = ({cards = []}) => {
  return (
    <div style={{position: 'relative'}}>
      {cards.map((card, i) => (
        <div
          key={`${card.value}_${card.suit}`}
          style={{
            display: 'inline-block',
            position: 'absolute',
            left: `${i * 20}px`,
          }}
        >
          <Card card={card} />
        </div>
      ))}
    </div>
  );
};

export default PlayerHand;
