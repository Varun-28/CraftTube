import React from "react";
import { Link } from "react-router-dom";
import { Empty } from "../../components/Components";
import { usePlaylist } from "../../context/playlistContext/playlist-context";
import { usePlaylistServerCall } from "../../context/playlistContext/usePlaylistServerCall";

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
              <div key={_id} class="card card-text-only">
                <Link to={`/video/playlist/${_id}`} class="card-head">
                  <div class="card-texts">
                    <h4 class="card-title">{title}</h4>
                    <p class="card-subTitle">{videos.length} Videos</p>
                  </div>
                </Link>
                <div class="card-buttons">
                  <button
                    class="card-btn-icon"
                    onClick={() => deletePlaylist(_id)}
                  >
                    <i class="fa-solid fa-trash"></i>
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
