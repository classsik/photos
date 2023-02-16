import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Image from "../components/Image";

const AlbumPage = ({ favorites, setFavorites }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        if (json.length == 0) {
          setImages(null);
        } else {
          setImages(json);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h1>Загрузка...</h1>;
  }

  if (images === null) {
    return <div>Альбом не найден</div>;
  }

  return (
    <div>
      <h3>Картинки</h3>
      <div className="images">
        {images != null &&
          images.map((item) => {
            return (
              <Image
                favorites={favorites}
                setFavorites={setFavorites}
                item={item}
              />
            );
          })}
      </div>
    </div>
  );
};

export default AlbumPage;
