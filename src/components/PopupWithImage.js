import React from 'react';

function PopupWithImage(props) {
  return (
    <div className={`popup popup_action_show-place ${props.isOpen ? "popup_opened" : ""}`}>
      <div className="popup__photo-container">
        <img src="#" alt="Фото достопримечательности" className="popup__photo" />
        <h2 className="popup__photo-title">Домбай</h2>
        <button className="popup__close-icon"></button>
      </div>
    </div>
  )
}

export default PopupWithImage;
