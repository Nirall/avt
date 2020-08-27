import React from 'react';
import './FormOrder.css';

function FormOrder(props) {
  return (
    <div className = "form-order-wrapper">
      <h2 className = "form-order__title">Отправить заявку</h2>
      <form className = "form-order">
        <p>Воспользуйтесь формой обратной связи</p>
        <input type = "text" className = "form-order__input" placeholder = "Ф.И.О."/>
        <input type = "text" className = "form-order__input" placeholder = "Наименование компании"/>
        <input type = "email" className = "form-order__input" placeholder = "E-mail"/>
        <input type = "tel" className = "form-order__input" placeholder = "Телефон"/>
        <p>Прикрепить файл</p>
        <input type = "file" multiple/>
        <input type = "text" className = "form-order__input" placeholder = "Сообщение" />
        <button type = "submit">Отправить</button>
        <p className = "form-order__description">Указывая свои данные, <a href = "/privacy">Вы соглашаетесь с нашей Политикой конфиденциальности</a></p>
      </form>
    </div>
  )
}

export default FormOrder;