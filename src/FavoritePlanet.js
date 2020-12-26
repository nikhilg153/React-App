import React from "react";

export default function FavoritePlanet({ favorite }) {
  return (
      <div>
        {
          favorite.length?favorite.map((x) => (
            <div key={x.id}>{x.name}</div>
          )):"click on mark as favorite to view favorite planets here"
        }
       
      </div>
  );
}
