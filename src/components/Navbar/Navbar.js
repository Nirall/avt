import React from 'react';
import logo from './logo.jpg';
import './Navbar.css';
import './__item/navbar__item.css';
import NavbarLink from './__link/NavbarLink';
import URLs from '../../URLs';

function Navbar(props) {
  const navList = URLs.map((url) => {
    return <NavbarLink path = { url.path } name = { url.name } key = { url.name }/>
  });
  return (
    <nav className = "navbar">
      <div className = "navbar__top">
        <img src = { logo } className = 'logo' alt = 'логотип' width = "150px"/>
        <a href = 'mailto:avt-technology@mail.ru' className = "navbar__item">avt-technology@mail.ru</a>
        <a href = 'tel:+79655485500' className = "navbar__item">+7 965 548-55-00</a>
        <div className = "navbar__item navbar__item_uppercase">
          Отправить заявку
        </div>
        <div className = "navbar__item navbar__item_uppercase">
          Заказать звонок
        </div>
      </div>
      <div className = "navbar__bottom">
        { navList }
      </div>
    </nav>
  )
}

export default Navbar;