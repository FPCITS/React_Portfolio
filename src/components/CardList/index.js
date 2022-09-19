import React, { useState } from 'react';
import Window from '../Window';

const CardList = ({ category }) => {
  const [isWindowOpen, setIsWindowOpen] = useState(false);
  const [currentCard, setCurrentCard] = useState();

  const [cards] = useState([
    {
      name: 'To-Market',
      category: 'portfolio',
    },
    {
      name: 'Date De-Stresser',
      category: 'portfolio',
    },
    {
      name: 'Tech Blog',
      category: 'portfolio',
    },
    {
      name: 'My Resume',
      category: 'resume',
    },
  ]);

  const currentCards = cards.filter(card => card.category === category);

  const toggleWindow = (image, i) => {
    setCurrentCard({ ...image, index: i });
    setIsWindowOpen(!isWindowOpen);
  };

  return (
    <div>
      {isWindowOpen && (
        <Window onClose={toggleWindow} currentCard={currentCard} />
      )}
      <div className="flex-row">
        {currentCards.map((image, i) => (
          <img
            src={require(`../../assets/small/${category}/${i}.jpg`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleWindow(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
