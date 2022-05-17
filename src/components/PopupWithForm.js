
function PopupWithForm(props) {
  return (
    <div className={`popup popup_action_${props.name} ${props.isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <h2 className="popup__title">{`${props.title}`}</h2>
        <form action="#" className="popup__form" name={`${props.name}`} noValidate>
          {props.children}
          <button type="submit" className="popup__save-btn">{`${props.btnText}`}</button>
        </form>
        <button className="popup__close-icon" onClick={props.onClose}></button>
      </div>
    </div>
  )
}

export default PopupWithForm;
