import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import AlbumPage from "./pages/AlbumPage";
import FavoritesPage from "./pages/FavoritesPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  const [authState, setAuthState] = useState({
    authenticated: false,
  });
  const [favorites, setFavorites] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
        <Header authState={authState} setAuthState={setAuthState} />
        <div className="inner">
          <Routes>
            <Route path="/" element={<HomePage authState={authState} />} />
            <Route
              path="/register"
              element={<RegisterPage setAuthState={setAuthState} />}
            />
            <Route
              path="/login"
              element={<LoginPage setAuthState={setAuthState} />}
            />
            {authState.authenticated && (
              <>
                <Route
                  path="/albums/:id"
                  element={
                    <AlbumPage
                      favorites={favorites}
                      setFavorites={setFavorites}
                    />
                  }
                />
                <Route
                  path="/favorites"
                  element={
                    <FavoritesPage
                      favorites={favorites}
                      setFavorites={setFavorites}
                    />
                  }
                />
              </>
            )}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
