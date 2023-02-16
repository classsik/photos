import React from "react";

const FavoritesPage = ({ favorites, setFavorites }) => {
  return (
    <div>
      <h3>Любимые</h3>
      <div className="images">
        {favorites.map((item) => {
          return (
            <div className="image">
              <img src={item.url} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FavoritesPage;
