import React from "react";
import styles from "./Tags.module.scss";

const Tags = ({ tags, handleRegionFilter }) => {
  return (
    <div className={styles.tags}>
      <p>Filter by Regions:</p>
      <ul className={styles.tags__list}>
        {tags.map((tag) => {
          return (
            <li key={tag} onClick={() => handleRegionFilter(tag)}>
              {tag}
            </li>
          );
        })}
        <li onClick={() => handleRegionFilter("")}>All</li>
      </ul>
    </div>
  );
};

export default Tags;
