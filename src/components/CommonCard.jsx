import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/themeContext/theme-context";
import { removeFromHistory } from "../context/userDataContext/history-serverCalls";
import { removeFromLikes } from "../context/userDataContext/likes-serverCalls";
import { removeFromWatchLater } from "../context/userDataContext/watchLater-serverCalls";
import { useUserData } from "../context/userDataContext/userData-context";

function CommonCard({ video, type }) {
  const { _id, title, creator, creatorLogo, thumbnail } = video;
  const { theme } = useTheme();
  const { dataDispatch } = useUserData();
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
        <button
          className="card-btn-icon"
          onClick={() => {
            if (type === "history") {
              removeFromHistory(_id, dataDispatch);
            } else if (type === "like") {
              removeFromLikes(_id, dataDispatch);
            } else if (type === "watchlater") {
              removeFromWatchLater(_id, dataDispatch);
            }
          }}
        >
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
}

export { CommonCard };
