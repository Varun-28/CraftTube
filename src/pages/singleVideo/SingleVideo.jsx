import { React, useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Loading } from "../../components/Components";
import { useVideo } from "../../context/videoContext/video-context";
import { useTheme } from "../../context/themeContext/theme-context";
import { useUserData } from "../../context/userDataContext/userData-context";
import { usePlaylist } from "../../context/playlistContext/playlist-context";
import { useHistoryServerCalls } from "../../context/userDataContext/useHistoryServerCalls";
import { useLikesServerCalls } from "../../context/userDataContext/useLikesServerCalls";
import { useWatchLaterServerCalls } from "../../context/userDataContext/useWatchLaterServerCalls";
import "./singleVideo.css";
import axios from "axios";

function SingleVideo() {
  const { videoId } = useParams();
  const navigate = useNavigate();
  const { theme } = useTheme();
  const {
    dataState: { watchlater, likes },
  } = useUserData();
  const token = localStorage.getItem("userToken");
  const [currentVideo, setCurrentVideo] = useState({});
  const { setModal } = usePlaylist();
  const { addToHistory } = useHistoryServerCalls();
  const { addToLikes, removeFromLikes } = useLikesServerCalls();
  const { addToWatchLater, removeFromWatchLater } = useWatchLaterServerCalls();

  const { filteredVideos } = useVideo();
  const relatedVideos = filteredVideos.filter(
    (video) =>
      video.categoryName === currentVideo.categoryName &&
      video._id !== currentVideo._id
  );
  const isLiked = () => {
    return likes.some((video) => video._id === videoId);
  };
  const inWatchLater = () => {
    return watchlater.some((video) => video._id === videoId);
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`/api/video/${videoId}`);
        if (response.status === 200 || response.status === 201) {
          setCurrentVideo(response.data.video);
        }
      } catch (error) {
        alert.show("Error: Can't Fetch Video", {
          type: "error",
        });
      }
    })();
  }, [videoId]);

  useEffect(() => {
    token &&
      addToHistory(filteredVideos.find((video) => video._id === videoId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoId]);

  const addToPlaylistHandler = () => {
    if (!token) {
      navigate("/login");
    } else {
      setModal(filteredVideos.find((video) => video._id === videoId));
    }
  };

  return (
    <div className="single-video-page">
      <div className="single-video-container">
        <div className="single-video-wrapper">
          {Object.keys(currentVideo).length === 0 ? (
            <Loading />
          ) : (
            <iframe
              className="single-video"
              src={`https://www.youtube.com/embed/${currentVideo._id}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen={true}
            ></iframe>
          )}
        </div>
        <div className="video-details">
          <h4>{currentVideo.title}</h4>
          <div className="flex items-center justify-between my-2">
            <div className="flex items-center gap-x-2">
              <img
                className="creator-logo"
                src={currentVideo.creatorLogo}
                alt={currentVideo.title}
              />
              <p>{currentVideo.creator}</p>
            </div>
            <div>
              <button
                className="btn btn-video"
                onClick={() => {
                  if (token) {
                    !isLiked()
                      ? addToLikes(currentVideo)
                      : removeFromLikes(currentVideo._id);
                  } else {
                    navigate("/login");
                  }
                }}
              >
                <i
                  className={`fa-solid ${
                    isLiked() ? "fa-thumbs-down" : "fa-thumbs-up"
                  }`}
                ></i>
              </button>
              <button
                className="btn btn-video"
                onClick={() => {
                  if (token) {
                    !inWatchLater()
                      ? addToWatchLater(currentVideo)
                      : removeFromWatchLater(currentVideo._id);
                  } else {
                    navigate("/login");
                  }
                }}
              >
                {inWatchLater() && <i className="fa-solid fa-trash"></i>}
                Watch Later
              </button>
              <button
                className="btn btn-video"
                onClick={() => addToPlaylistHandler()}
              >
                Playlist
              </button>
            </div>
          </div>
          <p className="text-base">{currentVideo.description}</p>
          <span
            className={`hr-line ${
              theme.isLight ? "hr-line-light" : "hr-line-dark"
            }`}
          ></span>
        </div>
      </div>
      <div className="related-videos-container">
        <h5>Related Videos</h5>
        {relatedVideos.length === 0 ? (
          <Loading />
        ) : (
          relatedVideos.map(({ _id, title, thumbnail }) => (
            <Link to={`/video/videolisting/${_id}`} key={_id}>
              <div className="related-video">
                <img
                  className="related-video-img"
                  src={thumbnail}
                  alt={title}
                />
                <p className="text-base">{title}</p>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}

export { SingleVideo };
