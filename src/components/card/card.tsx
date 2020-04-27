import * as React from 'react';
import {CardType} from '../../types';

type Props = {card: CardType};

const Card: React.FC<Props> = ({card}) => {
  const [cardPath, setCardPath] = React.useState('');
  const fileName = `${card.value.charAt(0)}_${card.suit.charAt(0)}`;
  const altText = `${card.value} of ${card.suit}`;
  const loadCardFile = async (card: CardType) => {
    const filePath = (await import(`../../card-assets/${fileName}.png`))
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
