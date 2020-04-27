import * as React from 'react';
import {CardType} from '../../types';

type Props = {card: CardType};

const Card: React.FC<Props> = ({card}) => {
  const [cardPath, setCardPath] = React.useState('');
  const fileName = `${card.value.toLowerCase()}_of_${card.suit.toLowerCase()}`;
  const altText = `${card.value.toLowerCase()} of ${card.suit.toLowerCase()}`;
  const loadCardFile = async (card: CardType) => {
    const filePath = (await import(`../../../assets/cards/${fileName}.png`))
      .default;
    setCardPath(filePath);
  };

  React.useEffect(() => {
    loadCardFile(card);
  });

  return (
    <div style={{display: 'inline-block'}}>
      {cardPath && (
        <img style={{height: '150px'}} alt={altText} src={cardPath} />
      )}
    </div>
  );
};

export default Card;
