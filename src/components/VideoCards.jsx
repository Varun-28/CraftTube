import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/themeContext/theme-context";

function VideoCards({
  _id,
  title,
  description,
  creator,
  categoryName,
  creatorLogo,
  thumbnail,
}) {
  const { theme } = useTheme();
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
        <button className="card-btn-icon">
          <i className="fas fa-clock"></i>
        </button>
        <button className="card-btn-icon">
          <i className="fas fa-stream"></i>
        </button>
      </div>
    </div>
  );
}

export { VideoCards };
