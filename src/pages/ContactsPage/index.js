import React from 'react';
import './index.css';

function ContactsPage(props) {
  return (
    <div>
      <div className = "top-img contact-img"></div>
      <main className = "main">
        <h1>Контакты</h1>
        <p>Полное наименование: Общество с ограниченной ответственностью «АВТ Технология»</p>
        <p>Сокращенное наименование: ООО «АВТ»</p>
        <p>Юр. адрес: 620062, Свердловская область, г. Екатеринбург,пр-т Ленина, д. 60а, офис 334</p>
        <p>Тел.: +7 965 548-55-00</p>
        <p>E-mail: avt-technology@mail.ru</p>
      </main>
    </div>
  )
}

export default ContactsPage;