
function PopupWithForm(props, {children}) {
  return (
    <div className={`popup popup_action_${props.name}`}>
      <div className="popup__container">
        <h2 className="popup__title">{`${props.title}`}</h2>
        <form action="#" className="popup__form" name={`${props.name}`} novalidate>
          {children}
          {/* <input type="text" name="name" className="popup__input popup__input_data_name" value="" required minlength="2" maxlength="40" />
          <span className="popup__error"></span>
          <input type="text" name="about" className="popup__input popup__input_data_job" value="" required minlength="2" maxlength="200" />
          <span className="popup__error"></span> */}
          <button type="submit" className="popup__save-btn">{`${props.btnText}`}</button>
        </form>
        <button className="popup__close-icon"></button>
      </div>
    </div>
  )
}

export default PopupWithForm;
