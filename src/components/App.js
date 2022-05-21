import React from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import Input from './Input';
import { useState } from 'react';

function App() {

  let [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  let [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  let [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  let [selectedCard, setSelectedCard] = useState(false);

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    // if (isEditProfilePopupOpen || isAddPlacePopupOpen || isEditAvatarPopupOpen || selectedCard) {
      setIsEditAvatarPopupOpen(false);
      setIsEditProfilePopupOpen(false);
      setIsAddPlacePopupOpen(false);
      setSelectedCard({});
    // }
  }

  return (
    <div className="page">
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} />
      <Footer />
      <PopupWithForm name="edit-profile" title="Редактировать профиль" btnText="Сохранить" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <Input type="text" name="name" nameOfClass="name" minLength="2" maxLength="40" placeholder="" />
        <Input type="text" name="about" nameOfClass="job" minLength="2" maxLength="200" placeholder="" />
      </PopupWithForm>
      <PopupWithForm name="add-place" title="Новое место" btnText="Создать" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <Input type="text" name="name" nameOfClass="place-name" minLength="2" maxLength="30" placeholder="Название" />
        <Input type="url" name="link" nameOfClass="place-link" placeholder="Ссылка на картинку" />
      </PopupWithForm>
      <PopupWithForm name="change-avatar" title="Обновить аватар" btnText="Сохранить" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <Input type="url" name="avatar" nameOfClass="avatar-link" placeholder="Ссылка на аватар" />
      </PopupWithForm>
      <PopupWithForm name="delete-place" title="Вы уверены?" btnText="Да"/>
      <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
    </div>
  );
}

export default App;
