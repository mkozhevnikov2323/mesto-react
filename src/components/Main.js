import React, { useEffect } from 'react';
import { useState } from 'react';
import { api } from '../utils/api';
import Card from './Card';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {

  let [userName, setUserName] = useState('');
  let [userDescription, setUserDescription] = useState('');
  let [userAvatar, setUserAvatar] = useState('');
  let [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUserInfo()
    .then((result) => {
      setUserName(result.name);
      setUserDescription(result.about);
      setUserAvatar(result.avatar);
    })
    .catch((err) => console.log(err));

    api.getInitialCards()
      .then((result) => {
        const cardsFromServer = result.map((cardFromServer) => {
          return {
            link: cardFromServer.link,
            likes: cardFromServer.likes,
            name: cardFromServer.name,
            key: cardFromServer._id
          }
        })
        setCards(cardsFromServer);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container" onClick={onEditAvatar}>
          <img src={ `${userAvatar}` } alt="Фото профиля" className="profile__avatar" />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{ `${userName}` }</h1>
          <button type="button" className="profile__edit-bth" onClick={onEditProfile}></button>
          <p className="profile__profession">{ `${userDescription}` }</p>
        </div>
        <button type="button" className="profile__add-btn" onClick={onAddPlace}></button>
      </section>
      <section>
        <ul className="elements">
          {
            cards.map((card) => (
              <Card card={card} key={card.key} onCardClick={onCardClick}/>
            ))
          }
        </ul>
      </section>
    </main>
  )
}

export default Main;
