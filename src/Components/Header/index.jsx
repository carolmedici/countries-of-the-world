import React from "react";
import globe from "./globe.png";
import styles from "./Header.module.scss";

const Header = ({ handleSearch }) => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <img src={globe} className={styles.header.globe} />
        <h1>Countries of the World</h1>
        <input
          className={styles.header__input}
          type="text"
          placeholder="Search"
          onChange={handleSearch}
        />
      </div>
    </header>
  );
};

export default Header;
