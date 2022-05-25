import React from 'react';
import trash from '../images/Trash.svg';
import CurrentUserContext from '../contexts/CurrentUserContext';

function Card({ card, onCardClick }) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = (
    `element__trash ${isOwn ? 'element__trash_visible' : 'element__trash_hidden'}`
  );
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = (
    `element__heart ${isLiked ? 'element__heart_active' : ""}`
  );

  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="element">
      <div className="element__rectangle">
        <img src={ trash } alt="Иконка удаления" className={ cardDeleteButtonClassName } />
        <img src={ card.link } alt={ card.name } className="element__photo" onClick={ handleClick }/>
        <p className="element__place">{ card.name }</p>
        <button type="button" className={ cardLikeButtonClassName }></button>
        <div className="element__heart-counter">{ card.likes.length }</div>
      </div>
    </li>
  )
}

export default Card;
