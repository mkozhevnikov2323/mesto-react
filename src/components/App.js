import '../index.css';
import './Header';
import Header from './Header';
import Main from './Main';

function App() {
  return (
    <div className="page">
      <Header />
      <Main />

      <footer className="footer">
        <p className="footer__copyright">© 2022 Mesto Russia</p>
      </footer>
      <div className="popup popup_action_edit-profile">
        <div className="popup__container">
          <h2 className="popup__title">Редактировать профиль</h2>
          <form action="#" className="popup__form" novalidate>
            <input type="text" name="name" className="popup__input popup__input_data_name" value="" required minlength="2" maxlength="40" />
            <span className="popup__error"></span>
            <input type="text" name="about" className="popup__input popup__input_data_job" value="" required minlength="2" maxlength="200" />
            <span className="popup__error"></span>
            <button type="submit" className="popup__save-btn">Сохранить</button>
          </form>
          <button className="popup__close-icon"></button>
        </div>
      </div>
      <div className="popup popup_action_add-place">
        <div className="popup__container">
          <h2 className="popup__title">Новое место</h2>
          <form action="#" className="popup__form" novalidate>
            <input type="text" name="name" className="popup__input popup__input_data_place-name" value="" placeholder="Название" required minlength="2" maxlength="30" />
            <span className="popup__error"></span>
            <input type="url" name="link" className="popup__input popup__input_data_place-link" value="" placeholder="Ссылка на картинку" required />
            <span className="popup__error"></span>
            <button type="submit" className="popup__save-btn">Создать</button>
          </form>
          <button className="popup__close-icon"></button>
        </div>
      </div>
      <div className="popup popup_action_change-avatar">
        <div className="popup__container">
          <h2 className="popup__title">Обновить аватар</h2>
          <form action="#" className="popup__form" novalidate>
            <input type="url" name="avatar" className="popup__input popup__input_data_avatar-link" value="" placeholder="Ссылка на аватар" required />
            <span className="popup__error"></span>
            <button type="submit" className="popup__save-btn">Сохранить</button>
          </form>
          <button className="popup__close-icon"></button>
        </div>
      </div>
      <div className="popup popup_action_show-place">
        <div className="popup__photo-container">
          <img src="#" alt="Фото достопримечательности" className="popup__photo" />
          <h2 className="popup__photo-title">Домбай</h2>
          <button className="popup__close-icon"></button>
        </div>
      </div>
      <div className="popup popup_action_delete-place">
        <div className="popup__container">
          <h2 className="popup__title">Вы уверены?</h2>
          <button className="popup__close-icon"></button>
          <button type="submit" className="popup__save-btn">Да</button>
        </div>
      </div>

      <template id="place-template">
        <li className="element">
          <div className="element__rectangle">
            <img src="<%=require('./images/Trash.svg')%>" alt="Иконка удаления" className="element__trash" />
            <img src="#" alt="#" className="element__photo" />
            <p className="element__place"></p>
            <button type="button" className="element__heart"></button>
            <div className="element__heart-counter">0</div>
          </div>
        </li>
      </template>

    </div>
  );
}

export default App;
