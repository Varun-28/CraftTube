import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/themeContext/theme-context";
import { usePlaylistServerCall } from "../context/playlistContext/usePlaylistServerCall";
import { useHistoryServerCalls } from "../context/userDataContext/useHistoryServerCalls.js";
import { useLikesServerCalls } from "../context/userDataContext/useLikesServerCalls";
import { useWatchLaterServerCalls } from "../context/userDataContext/useWatchLaterServerCalls";

function CommonCard({ video, type, playlistId }) {
  const { _id, title, creator, creatorLogo, thumbnail } = video;
  const { theme } = useTheme();
  const { deleteFromPlaylist } = usePlaylistServerCall();
  const { removeFromHistory } = useHistoryServerCalls();
  const { removeFromLikes } = useLikesServerCalls();
  const { removeFromWatchLater } = useWatchLaterServerCalls();

  const removeHandler = () => {
    if (type === "history") {
      removeFromHistory(_id);
    } else if (type === "like") {
      removeFromLikes(_id);
    } else if (type === "watchlater") {
      removeFromWatchLater(_id);
    } else if (type === "playlist") {
      deleteFromPlaylist(playlistId, _id);
    }
  };

  return (
    <div
      className={`card card-vertical flex flex-col justify-between ${
        theme.isLight ? "card-light" : "card-dark"
      }`}
    >
      <div className="card-head">
        <Link to={`/video/videolisting/${_id}`}>
          <div className="card-img">
            <img src={thumbnail} alt="thumbnail" />
          </div>
        </Link>
        <div className="card-texts">
          <h4
            className={`card-title ${
              theme.isLight ? "card-title-light" : "card-title-dark"
            }`}
          >
            {title.substring(0, 28)}...
          </h4>
          <p className="card-subTitle flex items-center gap-x-2">
            <img className="creator-logo" src={creatorLogo} alt={creator} />{" "}
            {creator}
          </p>
        </div>
      </div>
      <div className="card-buttons">
        <button className="card-btn-icon" onClick={removeHandler}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
}

export { CommonCard };
