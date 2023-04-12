# Countries of the world

This is the second gallery project I've made using React, but in this one we're going to consume an API to collect the data. Enjoy :)

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)



## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Filter countries by region

### Screenshot

![](https://github.com/carolmedici/countries-of-the-world/blob/main/public/print.png)
![](https://github.com/carolmedici/countries-of-the-world/blob/main/public/print2.png)

### Links

- Solution URL: [https://github.com/carolmedici/countries-of-the-world](https://github.com/carolmedici/countries-of-the-world)
- Live Site URL: [https://countries-of-the-world-pied.vercel.app/](https://countries-of-the-world-pied.vercel.app/)

## My process

### Built with

- API : REST Countries API 
- SCSS 
- [React](https://reactjs.org/) - JS library


### What I learned

This is the second gallery project I've done using react, but this time the data used was pulled from an API (REST Countries API ). I was able to deepen my skills in React.

Check out some code: 



```js
import React from "react";
import style from "./Cards.module.scss";

const Cards = ({ cards }) => {
  return (
    <div className={style.container}>
      <div className={style.countries__cards}>
        {cards.map((card) => (
          <li key={card.name.common} className={style.countries__card}>
            <img
              src={card.flags.png}
              alt={card.flags.alt}
              className={style.countries__img}
            />
            <p className={style.countries__name}> {card.name.common}</p>
            <p className={style.countries__data}>
              <strong>Language:</strong>{" "}
              {Object.keys(card.languages).map((key) => card.languages[key]).join(", ")}
            </p>
            <p className={style.countries__data}>
              <strong>Capital:</strong> {card.capital}
            </p>
            <p className={style.countries__data}>
              <strong>Region: </strong>
              {card.region}
            </p>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Cards;


```


### Continued development

I will continue studying React library

### Useful resources

- [React JS](https://legacy.reactjs.org/) - The library contains great documents and tutorials.


## Author

- LinkedIn - [Carolina Médici](https://www.linkedin.com/in/carolina-medici/)
- Frontend Mentor - [@carolmedici](https://www.frontendmentor.io/profile/carolmedici)




