import React from 'react';
import trash from '../images/Trash.svg';

function Card(props) {

  function handleClick() {
    props.onClickPhoto(true);

    console.log(13);
  }

  return (
    <li className="element">
      <div className="element__rectangle">
        <img src={ trash } alt="Иконка удаления" className="element__trash" />
        <img src={`${props.link}`} alt={`${props.name}`} className="element__photo" onClick={handleClick}/>
        <p className="element__place">{`${props.name}`}</p>
        <button type="button" className="element__heart"></button>
        <div className="element__heart-counter">{`${props.likes.length}`}</div>
      </div>
    </li>
  )
}

export default Card;
