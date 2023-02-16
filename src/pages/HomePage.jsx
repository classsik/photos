import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const HomePage = ({ authState }) => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAlbums = async () => {
      setLoading(true);
      await fetch("https://jsonplaceholder.typicode.com/albums")
        .then((res) => res.json())
        .then((json) => {
          setAlbums(json);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    fetchAlbums();
  }, []);

  if (loading) {
    return <h1>Загрузка...</h1>;
  }

  return (
    <div className="home">
      <h3>Альбомы</h3>
      <div className="albums">
        {albums.map((item) => {
          return (
            <div className="album" key={item.id}>
              <h4>{item.title}</h4>
              {authState.authenticated && (
                <button onClick={() => navigate("/albums/" + item.id)}>
                  Перейти
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
