import React, {useState} from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import DeletePopup from './DeletePopup';
import ImagePopup from './ImagePopup';
import EditAvatarPopup from './EditAvatarPopup';
import EditProfilePopup from './EditProfilePopup';
import AddPlacePopup from './AddPlacePopup';
import Input from './Input';
import { api } from '../utils/api';
import CurrentUserContext from '../contexts/CurrentUserContext';

function App() {

  let [currentUser, setCurrentUser] = useState({});
  let [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  let [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  let [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  let [isDeletePopupOpen, setIsDeletePopupOpen] = React.useState(false);
  let [selectedCard, setSelectedCard] = useState({});
  let [selectedCardToDelete, setSelectedCardToDelete] = React.useState({});
  let [showLoading, setShowLoading] = React.useState(false);
  let [cards, setCards] = useState([]);

  React.useEffect(() => {
    api.getUserInfo()
      .then((userInfoFromServer) => {
        setCurrentUser(userInfoFromServer);
      })
      .catch((err) => console.log(err));

    api.getInitialCards()
      .then((cards) => {
        setCards(cards);
      })
      .catch((err) => console.log(err));
  }, []);

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

  function handleDeleteCardClick(card) {
    setIsDeletePopupOpen(true);
    setSelectedCardToDelete(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      });
  }

  function handleCardDelete(card) {
    setShowLoading(true);
    api.deleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter((item) => item !== card))
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setShowLoading(false);
    })
  }

  function handleUpdateUser(userData) {
    setShowLoading(true);
    api.setUserInfo(userData)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setShowLoading(false);
    })
  }

  function handleUpdateAvatar(data) {
    setShowLoading(true);
    api.updateUserAvatar(data)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setShowLoading(false);
    })
  }

  function handleAddPlaceSubmit(data) {
    setShowLoading(true);
    api.addUserCard(data)
      .then((res) => {
        setCards([res, ...cards]);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setShowLoading(false);
    })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main onEditProfile={ handleEditProfileClick } onAddPlace={ handleAddPlaceClick } onEditAvatar={ handleEditAvatarClick } onCardClick={ handleCardClick } onCardLike={handleCardLike}
        onDeleteButton={handleDeleteCardClick}
        cards={cards} />
        <Footer />
        {/* <PopupWithForm name="edit-profile" title="Редактировать профиль" btnText="Сохранить" isOpen={ isEditProfilePopupOpen } onClose={ closeAllPopups }>
          <Input type="text" name="name" nameOfClass="name" minLength="2" maxLength="40" placeholder="" />
          <Input type="text" name="about" nameOfClass="job" minLength="2" maxLength="200" placeholder="" />
        </PopupWithForm>
        <PopupWithForm name="add-place" title="Новое место" btnText="Создать" isOpen={ isAddPlacePopupOpen } onClose={ closeAllPopups }>
          <Input type="text" name="name" nameOfClass="place-name" minLength="2" maxLength="30" placeholder="Название" />
          <Input type="url" name="link" nameOfClass="place-link" placeholder="Ссылка на картинку" />
        </PopupWithForm>
        <PopupWithForm name="change-avatar" title="Обновить аватар" btnText="Сохранить" isOpen={ isEditAvatarPopupOpen } onClose={ closeAllPopups }>
          <Input type="url" name="avatar" nameOfClass="avatar-link" placeholder="Ссылка на аватар" />
        </PopupWithForm>
        <PopupWithForm name="delete-place" title="Вы уверены?" btnText="Да"/> */}
        <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        onUpdateUser={handleUpdateUser}
        showLoading={showLoading} />
        <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        onUpdateAvatar={handleUpdateAvatar}
        showLoading={showLoading} />
        <ImagePopup card={ selectedCard } onClose={ closeAllPopups }/>
        <AddPlacePopup
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        onAddPlace={handleAddPlaceSubmit}
        showLoading={showLoading} />
        <DeletePopup
        isOpen={isDeletePopupOpen}
        onClose={closeAllPopups}
        onCardDelete={handleCardDelete}
        showLoading={showLoading}
        card={selectedCardToDelete} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
