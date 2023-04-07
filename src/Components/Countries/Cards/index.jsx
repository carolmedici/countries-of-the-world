import React, {useEffect, useState} from "react";
import api from '../../services/api';





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
    <div >
      {cards.map(card => (
        <li key={card.id}>
          Flag: {card.flag} <br/>
          Name: {card.name.common} <br/>
          Language: {card.languages} <br/>
          Capital: {card.capital}
        </li>
      ))}
    </div>
  );
}

export default Cards;
