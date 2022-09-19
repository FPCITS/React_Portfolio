import React from 'react';

const Window = ({ onClose, currentCard }) => {
  const { name, description, category, index } = currentCard;

  return (
    <div className="windowBackdrop">
      <div className="windowContainer">
        <h3 className="windowTitle">{name} </h3>
        <img
          src={require(`../../assets/large/${category}/${index}.jpg`).default}
          alt="current category"
        />
        <p>{description}</p>
        <button type="button" onClick={onClose}>
          Close this window.
        </button>
      </div>
    </div>
  );
};

export default Window;
