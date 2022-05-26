import React from "react";
import PopupWithForm from "./PopupWithForm";
import Input from './Input';

function AddPlacePopup({isOpen, onClose, onAddPlace, showLoading}) {
  let [name, setName] = React.useState('');
  let [link, setLink] = React.useState('');

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
    name,
    link
    });
  }

  return (
    <PopupWithForm name="add-place" title="Новое место" btnText={showLoading ? 'Сохранение...' : 'Создать'} isOpen={ isOpen } onClose={ onClose } onSubmit={handleSubmit}>
      <Input type="text" name="name" nameOfClass="place-name" minLength="2" maxLength="30" placeholder="Название" onChange={handleNameChange} />
      <Input type="url" name="link" nameOfClass="place-link" placeholder="Ссылка на картинку" onChange={handleLinkChange} />
    </PopupWithForm>
  );
}

export default AddPlacePopup;
