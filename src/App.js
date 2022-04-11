import "./App.css";
import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import { Navbar, Footer, NotFound } from "./components/Components";
import {
  Login,
  Signup,
  History,
  Home,
  Playlist,
  VideoListing,
  Profile,
  WatchLater
} from "./pages/Pages.jsx";
import { useTheme } from "./utils/theme-context.jsx";

function App() {
  const { theme } = useTheme();

  return (
    <div
      className={`App flex flex-col min-h-screen ${
        theme.isLight ? "light" : "dark"
      }`}
    >
      <div className="header">
        <Navbar />
      </div>
      <div className="main grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/playlist" element={<Playlist />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/history" element={<History />} />
          <Route path="/videolisting" element={<VideoListing />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/watchlater" element={<WatchLater />} />
          <Route path="*" element={<NotFound />} />

          <Route path="/mock" element={<Mockman />} />
        </Routes>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
