import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import Cards from "../Components/Countries/Cards";
import Footer1 from "../Components/Footer1";
import Tags from "../Components/Tags";
import api from "../Components/services/api";

const HomePage = () => {
  const [cards, setCards] = useState([]);
  const [items, setItems] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    api.get().then((response) => {
      setCards(response.data);
      setItems(response.data);
      setTags([...new Set(response.data.map((card) => card.region))]);
    }).catch((err) => {
      console.error("ERROR" + err)
    });
  }, []);

  const RegionFilter = (tag) => {
    if (tag === "All") {
      setItems(cards);
    } else {
      const filteredItems = cards.filter((card) => {
        return card.region === tag;
      });
      setItems(filteredItems);
    }
  };

  return (
    <>
      <Header />
      <section>
        <Tags tags={tags} handleRegionFilter={RegionFilter} />
        <Cards cards={items} />
      </section>
      <Footer1 />
    </>
  );
};

export default HomePage;
