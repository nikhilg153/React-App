import React, { useState, useEffect } from "react";
import FavoritePlanet from "./FavoritePlanet";
import PlanetsList from "./PlanetsList";
import "./styles.css";

export default function App() {
  const [activeTab, setActiveTab] = useState("first");
  const [planetsList, setPlanetsList] = useState([]);
  const [loading,setLoading] = useState(true);
  useEffect(() => {
    fetch("https://assignment-machstatz.herokuapp.com/planet")
      .then((response) => response.json())
      .then((x) =>{
        setPlanetsList(x);
        setLoading(false);
      }
      ) 
  }, []);
  const [favorite, setFavorite] = useState([]);

  const setFavoritePlanet = (id) => {
    if (!favorite.some((e) => e.id === id))
      setFavorite([...favorite, ...planetsList.filter((x) => x.id === id)]);
  };
  const removeFavoritePlanet = (id) => {
    if (favorite.some((e) => e.id === id))
      setFavorite([...favorite.filter((x) => x.id !== id)]);
  };

  return (
    <div>
      <div style={{textAlign:"center" }}>
        <button onClick={() => setActiveTab("first")}>
          View All Planets
        </button>
        <button onClick={() => setActiveTab("second")}>
          View Favorite Planets
        </button>
      </div>
      {activeTab === "first" && (
        <PlanetsList
          loading={loading}
          planetsList={planetsList}
          setFavoriteHandler={setFavoritePlanet}
          removeFavoriteHandler={removeFavoritePlanet}
        />
      )}
      {activeTab === "second" && (
        <div>
          <FavoritePlanet favorite={favorite} />
        </div>
      )}
    </div>
  );
}
