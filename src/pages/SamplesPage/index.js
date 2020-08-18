import React from 'react';
import { brassArrImgs, alumArrImgs, coppArrImgs } from "./images";
import './index.css';

function SamplesPage(props) {
  const brassListImgs = brassArrImgs.map((img) => {
    return (
      <div className = "samples__img" style = {{ background: `center/cover no-repeat url(${img})`}} key = { img }></div>
    )
  })

  const alumListImgs = alumArrImgs.map((img) => {
    return (
      <div className = "samples__img" style = {{ background: `center/cover no-repeat url(${img})`}} key = { img } ></div>
    )
  })

  const coppListImgs = coppArrImgs.map((img) => {
    return (
      <div className = "samples__img" style = {{ background: `center/cover no-repeat url(${img})`}} key = { img }></div>
    )
  })

  return (
    <div>
      <div className = "top-img samples-img"></div>
      <main className = "main">
        <h1>ОБРАЗЦЫ ИЗДЕЛИЙ</h1>
        <div className = "content">
          <article className = "article">
            Примеры использования нашей продукции:
            <ul>
              <li>Корпус латунный для счетчика жидкостей и газов</li>
              <li>Корпус латунный для насосов</li>
              <li>Латунные коллекторы</li>
              <li>Латунные и алюминиевые крышки и заглушки</li>
              <li>Латунная и алюминиевая фурнитура</li>
              <li>Латунные и алюминиевые клапаны</li>
              <li>Корпуса латунных шаровых кранов, вентилей, задвижек</li>
              <li>Медные контакты</li>
            </ul>
            Характеристики получаемых поковок:
            <ul>
              <li>вес от 0,01 кг до 2 кг</li>
              <li>максимальные размеры поковок (длина х ширина х высота) 100х100х60 мм</li>
              <li>минимальная партия производства 5000 штук</li>
            </ul>
            Характеристики механически обработанных деталей:
            <ul>
              <li>вес от 0,01 кг до 1,4 кг</li>
              <li>максимальные размеры детали (длина х ширина х высота) 120х80х80 мм</li>
              <li>минимальная партия производства 5000 штук</li>
            </ul>
          </article>
          <aside className = "aside">
            <p className = "main-idea">
              Наше автоматизированное современное оборудование гарантируют высокое качество
              продукции и может обеспечить крупносерийное и массовое производство изделий заданной точности. 
              До 500 000 деталей в месяц.
            </p>
          </aside>
        </div>
        <h2>ОБРАЗЦЫ</h2>
        <div className = "samples__titles">
          <span className = "samples__title">Образцы из латуни</span>
          <span className = "samples__title">Образцы из алюминия</span>
          <span className = "samples__title">Образцы из меди</span>
        </div>
        <div className = "samples__images">
          { brassListImgs }
        </div>
        <div className = "samples__images">
          { alumListImgs }
        </div>
        <div className = "samples__images">
          { coppListImgs }
        </div>
      </main>
    </div>
  )
}

export default SamplesPage;