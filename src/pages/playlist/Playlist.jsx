import React from "react";
import { Link } from "react-router-dom";
import { Empty } from "../../components/Components";
import { usePlaylist } from "../../context/playlistContext/playlist-context";
import { usePlaylistServerCall } from "../../context/playlistContext/usePlaylistServerCall";
import "./playlist.css"

function Playlist() {
  const {
    playlistState: { playlists },
  } = usePlaylist();
  const { deletePlaylist } = usePlaylistServerCall();
  return (
    <div>
      {playlists.length === 0 ? (
        <Empty emptyText="Playlist" />
      ) : (
        <section className="playlist-wrapper p-4">
          <h4>Playlists</h4>
          <div className="flex flex-wrap gap-2 mb-20 mt-4">
            {playlists.map(({ _id, title, videos }) => (
              <div key={_id} className="card card-text-only">
                <Link to={`/video/playlist/${_id}`} className="card-head">
                  <div className="card-texts">
                    <h4 className="card-title">{title}</h4>
                    <p className="card-subTitle">{videos.length} Videos</p>
                  </div>
                </Link>
                <div className="card-buttons">
                  <button
                    className="card-btn-icon"
                    onClick={() => deletePlaylist(_id)}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export { Playlist };
