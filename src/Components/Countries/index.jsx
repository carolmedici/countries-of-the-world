import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import styles from "./Countries.module.scss";
import Tags from "../Tags";
import api from "../services/api";

const Countries = () => {
    const [cards, setCards] = useState([]);
    const [items, setItems] = useState([]);
    const [tags, setTags] = useState([]);

    useEffect(() => {
      api.get()
        .then((response) => {
          setCards(response.data)
          setTags([...new Set(response.data.map((card) => card.region))]);
        })
        .catch((err) => {
          console.error("ERROR" + err)
        })
    }, []);

    const RegionFilter = (tag) => {
        const newPhotos = cards.filter ((card) => {
            return card.region === tag;
        });
        setItems(newPhotos);
    }

    return ( 
        <section className={styles.countries}>
        <h2>Browse the gallery</h2>
        <Tags tags={tags} RegionFilter={RegionFilter} setItems={setItems}/>
        <Cards items={items} styles={styles} />
        </section>
     );
}
 
export default Countries;

