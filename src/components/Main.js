import React, { useState, useEffect } from 'react';
import { api } from '../utils/api';
import Card from './Card';
import CurrentUserContext from '../contexts/CurrentUserContext';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick, onCardLike, cards, onDeleteButton }) {

  const currentUser = React.useContext(CurrentUserContext);
  // let [userName, setUserName] = useState('');
  // let [userDescription, setUserDescription] = useState('');
  // let [userAvatar, setUserAvatar] = useState('');
  // let [cards, setCards] = useState([]);

  // function handleCardLike(card) {
  //   const isLiked = card.likes.some(i => i._id === currentUser._id);
  //   api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
  //       setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
  //   });
  // }

  // useEffect(() => {
    // api.getUserInfo()
    // .then((result) => {
    //   setUserName(result.name);
    //   setUserDescription(result.about);
    //   setUserAvatar(result.avatar);
    // })
    // .catch((err) => console.log(err));

  //   api.getInitialCards()
  //     .then((result) => {
  //       const cardsFromServer = result.map((cardFromServer) => {
  //         return {
  //           link: cardFromServer.link,
  //           likes: cardFromServer.likes,
  //           name: cardFromServer.name,
  //           key: cardFromServer._id,
  //           _id: cardFromServer._id,
  //           owner: {
  //             _id: cardFromServer.owner._id
  //           }
  //         }
  //       })
  //       setCards(cardsFromServer);
  //       // setCards(cards);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container" onClick={ onEditAvatar }>
          <img src={ currentUser.avatar } alt="Фото профиля" className="profile__avatar" />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{ currentUser.name }</h1>
          <button type="button" className="profile__edit-bth" onClick={ onEditProfile }></button>
          <p className="profile__profession">{ currentUser.description }</p>
        </div>
        <button type="button" className="profile__add-btn" onClick={ onAddPlace }></button>
      </section>
      <section>
        <ul className="elements">
          {
            cards.map((card) => (
              <Card card={ card } key={ card._id } onCardClick={ onCardClick } onCardLike={ onCardLike } onDeleteButton={ onDeleteButton } />
            ))
          }
        </ul>
      </section>
    </main>
  )
}

export default Main;
