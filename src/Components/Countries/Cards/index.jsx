import React, { useEffect, useState } from "react";
import api from "../../services/api";
import style from "./Cards.module.scss";

const Cards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.get()
      .then((response) => {
        console.log(response);
        setCards(response.data)
      })
      .catch((err) => {
        console.error("ERROR" + err)
      })
  }, []);

  return (
    <div className={style.container}>
      <div className={style.countries__cards}>
        {cards.map(card => (
          <li key={card.name.common} className={style.countries__card}>
            <img src={card.flags.png} alt={card.flags.alt} className={style.countries__img}/>
            <p className={style.countries__name}> {card.name.common}</p>
            <p className={style.countries__data}><strong>Language:</strong> {Object.keys(card.languages).map((key) => card.languages[key]).join(', ')} </p>
            <p className={style.countries__data}><strong>Capital:</strong> {card.capital}</p>
            <p className={style.countries__data}><strong>Region: </strong>{card.region}</p>
          </li>
        ))}
      </div>
    </div>
  );
}

export default Cards;
