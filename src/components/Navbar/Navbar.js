import React from 'react';
import logo from './logo.jpg';
import './Navbar.css';
import NavbarLink from './__link/NavbarLink';
import URLs from '../../URLs';

function Navbar(props) {
  const navList = URLs.map((url) => {
    return <NavbarLink path = { url.path } name = { url.name } key = { url.name }/>
  });
  return (
    <nav className = "navbar">
      <div className = "navbar__item">
        <img src = { logo } className = 'logo' alt = 'логотип' width = "130px"/>
      </div>
      <div className = "navbar__item">
        <div className = 'navbar__list'>
          { navList }
        </div>
      </div>
      <div className = "navbar__item">
        <a href = 'tel:+79655485500' className = "navbar__link">+7 965 548-55-00</a>
        <a href = 'mailto:avt-technology@mail.ru' className = "navbar__link">avt&#8209;technology@mail.ru</a>
      </div>
      <div className = "navbar__item">
        <button className = "navbar__button">Заказать звонок</button>
        <button className = "navbar__button">Отправить заявку</button>
      </div>
    </nav>
  )
}

export default Navbar;