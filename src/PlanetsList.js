import React from "react";
import "./styles.css";

export default function PlanetsList({
  setFavoriteHandler,
  planetsList,
  removeFavoriteHandler,
  loading
}) {
  return (
    <div>
      {loading
        ? "loading planets..."
        : planetsList.map((x) => (
            <div key={x.id} style={{ display: "flex" }}>
              <div>
                <div>{x.name} </div>
                <button onClick={() => setFavoriteHandler(x.id)}>
                  mark as favorite{" "}
                </button>{" "}
                <button  onClick={() => removeFavoriteHandler(x.id)}>
                  remove favorite{" "}
                </button>
              </div>
            </div>
          ))}
    </div>
  );
}
