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
  WatchLater,
} from "./pages/Pages.jsx";
import { PrivateAuth } from "./utils/PrivateAuth";
import { RequiresAuth } from "./utils/RequiresAuth";
import { useTheme } from "./context/themeContext/theme-context.jsx";

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
          <Route path="/videolisting" element={<VideoListing />} />
          <Route
            path="/playlist"
            element={
              <RequiresAuth>
                <Playlist />
              </RequiresAuth>
            }
          />
          <Route
            path="/history"
            element={
              <RequiresAuth>
                <History />
              </RequiresAuth>
            }
          />
          <Route
            path="/profile"
            element={
              <RequiresAuth>
                <Profile />
              </RequiresAuth>
            }
          />
          <Route
            path="/watchlater"
            element={
              <RequiresAuth>
                <WatchLater />
              </RequiresAuth>
            }
          />
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
