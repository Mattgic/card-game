import * as React from 'react';
import {CardType} from '../../types';
import {Card} from '../card';

type Props = {cards: CardType[]};

const PlayerHand: React.FC<Props> = ({cards = []}) => {
  return (
    <div>
      {cards.map((card) => {
        return <Card card={card} />;
      })}
    </div>
  );
};

export default PlayerHand;
