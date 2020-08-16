import React from 'react';
import './Footer.css';
import '../Navbar/__item/navbar__item.css';

function Footer(props) {
  return (
    <footer className = 'footer'>
      <div className = 'footer__title'>
        avt technology
      </div>
      <div>
        <a href = 'mailto:avt-technology@mail.ru' className = 'navbar__item'>avt-technology@mail.ru</a>
        <a href = 'tel:+79655485500' className = 'navbar__item'>+7 965 548-55-00</a>
      </div>
      <p>
        Мы производим широкий ассортимент продукции из латуни,
        алюминия, меди и медных сплавов для различных отраслей промышленности.
      </p>
      <p>
        Гарантируем высокое качество продукции за счет применения передовых технологических процессов.
      </p>
      
    </footer>
  )
}

export default Footer;