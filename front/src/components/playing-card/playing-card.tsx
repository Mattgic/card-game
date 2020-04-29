/** @jsx jsx */
import {jsx} from '@emotion/core';

import * as React from 'react';
import {useDrag} from 'react-dnd';
import {CardType} from '../../types';
import {css} from '@emotion/core';

type Props = {card: CardType; onClick?: () => void};

const styles = {
  card: css`
    position: relative;
    display: inline-block;

    div.notsel &:hover {
      top: -5px;
      cursor: pointer;
      
      &:active {
        z-index: 1;
      }
    }
    
  `,
};
const PlayingCard: React.FC<Props> = ({card, onClick}) => {
  const [cardPath, setCardPath] = React.useState('');
  const fileName = `${card.value.toLowerCase()}_of_${card.suit.toLowerCase()}`;
  const altText = `${card.value.toLowerCase()} of ${card.suit.toLowerCase()}`;
  const [{opacity}, dragRef] = useDrag({
    item: {type: 'playing-card', card: card},
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  });

  const loadCardFile = async (card: CardType) => {
    const filePath = (await import(`../../../assets/cards/${fileName}.png`))
      .default;
    setCardPath(filePath);
  };

  React.useEffect(() => {
    loadCardFile(card);
  });

  return (
    <div ref={dragRef} css={styles.card} style={{opacity}}>
      {cardPath && (
        <img
          onClick={(e) => onClick && onClick()}
          style={{height: '150px'}}
          alt={altText}
          src={cardPath}
        />
      )}
    </div>
  );
};

export default PlayingCard;
