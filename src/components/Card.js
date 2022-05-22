import React from 'react';
import trash from '../images/Trash.svg';

function Card({ card, onCardClick }) {

  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="element">
      <div className="element__rectangle">
        <img src={ trash } alt="Иконка удаления" className="element__trash" />
        <img src={ card.link } alt={ card.name } className="element__photo" onClick={ handleClick }/>
        <p className="element__place">{ card.name }</p>
        <button type="button" className="element__heart"></button>
        <div className="element__heart-counter">{ card.likes.length }</div>
      </div>
    </li>
  )
}

export default Card;
