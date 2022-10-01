import React from "react";
import { directors } from "../data";

function Directors() {

  const directorsList = directors.map((director, index) => (
    <div key={index}>
      {director.name}
      <ul>
        {director.movies.map((movie, index) => (
          <li key={index}>{movie}</li>
        ))}
      </ul>
    </div>
  ));

  return (
    <div>
      <h1>Directors Page</h1>
      {directorsList}
    </div>
  );
}

export default Directors;
