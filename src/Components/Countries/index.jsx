import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import styles from "./Countries.module.scss";
import Tags from "../Tags";
import api from "../../services/api";

const Countries = () => {
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    api.get().then((response) => {
      setCards(response.data);
      setFilteredCards(response.data);
      setTags([...new Set(response.data.map((card) => card.region))]);
    });
  }, []);

  const handleRegionFilter = (tag) => {
    if (tag === "All") {
      setFilteredCards(cards);
    } else {
      const newCards = cards.filter((card) => card.region === tag);
      setFilteredCards(newCards);
    }
  };

  return (
    <section className={styles.countries}>
      <h2>Browse the gallery</h2>
      <Tags tags={tags} handleRegionFilter={handleRegionFilter} />
      <Cards cards={filteredCards} />
    </section>
  );
};

export default Countries;
