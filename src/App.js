import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import { Navbar, NotFound } from "./components/Components";
import {
  Login,
  Signup,
  History,
  Home,
  Playlist,
  VideoListing,
  Profile,
  WatchLater,
  LikedVideos,
  Video,
  SingleVideo,
  PlaylistDetail,
} from "./pages/Pages.jsx";
import { PrivateAuth } from "./utils/PrivateAuth";
import { RequiresAuth } from "./utils/RequiresAuth";
import { useTheme } from "./context/themeContext/theme-context.jsx";
import { usePlaylist } from "./context/playlistContext/playlist-context";
import { PlayListModal } from "./pages/playlistDetail/PlaylistModal.jsx";

function App() {
  const { theme } = useTheme();
  const { modal } = usePlaylist();
  const [search, setSearch] = useState("");

  return (
    <div
      className={`App flex flex-col min-h-screen ${
        theme.isLight ? "light" : "dark"
      }`}
    >
      <div className="header">
        <Navbar setSearch={setSearch} />
      </div>
      <div className="main grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={
              <PrivateAuth>
                <Login />
              </PrivateAuth>
            }
          />
          <Route
            path="/signup"
            element={
              <PrivateAuth>
                <Signup />
              </PrivateAuth>
            }
          />
          <Route path="/video" element={<Video />}>
            <Route index path="videolisting" element={<VideoListing search={search} />} />
            <Route path="videolisting/:videoId" element={<SingleVideo />} />
            <Route
              path="watchlater"
              element={
                <RequiresAuth>
                  <WatchLater />
                </RequiresAuth>
              }
            />
            <Route
              path="liked"
              element={
                <RequiresAuth>
                  <LikedVideos />
                </RequiresAuth>
              }
            />
            <Route
              path="playlist"
              element={
                <RequiresAuth>
                  <Playlist />
                </RequiresAuth>
              }
            />
            <Route
              path="playlist/:playlistId"
              element={
                <RequiresAuth>
                  <PlaylistDetail />
                </RequiresAuth>
              }
            />
            <Route
              path="history"
              element={
                <RequiresAuth>
                  <History />
                </RequiresAuth>
              }
            />
            <Route
              path="profile"
              element={
                <RequiresAuth>
                  <Profile />
                </RequiresAuth>
              }
            />
          </Route>
          <Route path="*" element={<NotFound />} />

          <Route path="/mock" element={<Mockman />} />
        </Routes>
      </div>
      <PlayListModal modal={modal} />
    </div>
  );
}

export default App;
