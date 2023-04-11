import React, { useState } from "react";
import Header from "../Components/Header";
import Cards from "../Components/Countries/Cards";
import Footer1 from "../Components/Footer1";
import Countries from "../Components/Countries";
import Tags from "../Components/Tags";
import api from "../Components/services/api";



const HomePage = () => {
  const [items, setItems] = useState([]);
  const [regions, setRegions] = useState([]);

  React.useEffect(() => {
    api.get().then((response) => {
      setRegions(response.data);
      setItems(response.data);
    });
  }, []);

  const tags = [...new Set(regions.map((region) => region.region))];

  const RegionFilter = (tag) => {
    const newCards = regions.filter((region) => {
      return region.region === tag;
    });
    setItems(newCards);
  };

  return (
    <>
      <Header />
      <section>
        <Tags tags={tags} RegionFilter={RegionFilter} setItems={setItems} />
        <Cards items={items} />
      </section>
      <Footer1 />
    </>
  );
};

export default HomePage;
