import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import Input from './Input';

function App() {
  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />
      <PopupWithForm name="edit-profile" title="Редактировать профиль" btnText="Сохранить">
        <Input type="text" name="name" nameOfClass="name" minLength="2" maxLength="40" placeholder="" />
        <Input type="text" name="about" nameOfClass="job" minLength="2" maxLength="200" placeholder="" />
      </PopupWithForm>
      <PopupWithForm name="add-place" title="Новое место" btnText="Создать">
        <Input type="text" name="name" nameOfClass="place-name" minLength="2" maxLength="30" placeholder="Название" />
        <Input type="url" name="link" nameOfClass="place-link" placeholder="Ссылка на картинку" />
      </PopupWithForm>
      <PopupWithForm name="change-avatar" title="Обновить аватар" btnText="Сохранить">
        <Input type="url" name="avatar" nameOfClass="avatar-link" placeholder="Ссылка на аватар" />
      </PopupWithForm>
      <PopupWithForm name="delete-place" title="Вы уверены?" btnText="Да"/>


      <div className="popup popup_action_show-place">
        <div className="popup__photo-container">
          <img src="#" alt="Фото достопримечательности" className="popup__photo" />
          <h2 className="popup__photo-title">Домбай</h2>
          <button className="popup__close-icon"></button>
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
