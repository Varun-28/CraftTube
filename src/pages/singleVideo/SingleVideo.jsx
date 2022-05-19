import { React, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useVideo } from "../../context/videoContext/video-context";
import { useTheme } from "../../context/themeContext/theme-context";
import { Loading } from "../../components/Components";
import "./singleVideo.css";
import axios from "axios";

function SingleVideo() {
  const { videoId } = useParams();
  const { theme } = useTheme();
  const [currentVideo, setCurrentVideo] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`/api/video/${videoId}`);
        if (response.status === 200 || response.status === 201) {
          setCurrentVideo(response.data.video);
        }
      } catch (error) {
        console.log("error");
      }
    })();
  }, [videoId]);

  const { filteredVideos } = useVideo();
  const relatedVideos = filteredVideos.filter(
    (video) =>
      video.categoryName === currentVideo.categoryName &&
      video._id !== currentVideo._id
  );
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
              <button className="btn btn-video">Like</button>
              <button className="btn btn-video">Watch Later</button>
              <button className="btn btn-video">Playlist</button>
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
