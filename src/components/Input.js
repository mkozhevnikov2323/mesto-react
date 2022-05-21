import React from 'react';

function Input(props) {
  return (
    <>
      <input type={ `${props.type}` } name={ `${props.name}` } className={ `popup__input popup__input_data_${props.nameOfClass}` } minLength={ `${props.minLength}` } maxLength={ `${props.maxLength}` } placeholder={ `${props.placeholder}` } defaultValue="" required />
      <span className="popup__error"></span>
    </>
  )
}

export default Input;
