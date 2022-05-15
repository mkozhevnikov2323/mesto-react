
function Main() {

  function handleEditAvatarClick() {
    const popupEditAvatar = document.querySelector('.popup_action_change-avatar');
    popupEditAvatar.classList.add('popup_opened');
  }

  function handleEditProfileClick() {
    const popupEditProfile = document.querySelector('.popup_action_edit-profile');
    popupEditProfile.classList.add('popup_opened');
  }

  function handleAddPlaceClick() {
    const popupAddPlace = document.querySelector('.popup_action_add-place');
    popupAddPlace.classList.add('popup_opened');
  }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container" onClick={handleEditAvatarClick}>
          <img src="#" alt="Фото профиля" className="profile__avatar" />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">Жак-Ив Кусто</h1>
          <button type="button" className="profile__edit-bth" onClick={handleEditProfileClick}></button>
          <p className="profile__profession">Исследователь океана</p>
        </div>
        <button type="button" className="profile__add-btn" onClick={handleAddPlaceClick}></button>
      </section>
      <section>
        <ul className="elements">

        </ul>
      </section>
    </main>
  )
}

export default Main;
