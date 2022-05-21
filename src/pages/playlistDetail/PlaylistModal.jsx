import React, { useState } from "react";
import { usePlaylist } from "../../context/playlistContext/playlist-context";
import { usePlaylistServerCall } from "../../context/playlistContext/usePlaylistServerCall";
import "./playlistModal.css";

function PlayListModal({ modal }) {
  const { playlistState, setModal } = usePlaylist();
  const { createPlaylist, addToPlaylist } = usePlaylistServerCall();
  const [title, setTitle] = useState("");

  const createClickHandler = () => {
    if (title) {
      createPlaylist(title);
      setTitle("");
    }
  };
  return (
    <div className={`modal-container ${modal ? "show" : "none"}`}>
      <div className="card modal mt-48 border-8">
        <div>
          <h2>Your Playlists</h2>
        </div>
        <div className="text-sm card-desc">
          <ul className="play-list">
            {playlistState.playlists.map((item) => {
              return (
                <li
                  key={item._id}
                  onClick={() => {
                    addToPlaylist(item._id, modal);
                    setModal(null);
                  }}
                >
                  {" "}
                  <div className="ply-new-items flex items-end justify-end border-4">
                    <span className="mt-4">{item.title}</span>
                    <span className="material-icons mt-2 modal-btn">add</span>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="icon-div modal-close-btn">
            <span
              onClick={() => setModal(null)}
              className="material-icons modal-btn"
              id="close-modal"
            >
              <i className="fa-solid fa-xmark"></i>
            </span>
          </div>
          <div className="modal-footer">
            <input
              type="text"
              value={title}
              className="ply-modal-input"
              placeholder="Playlist Name"
              onChange={(e) => setTitle(e.target.value)}
            />
            <button
              onClick={() => createClickHandler()}
              className="btn btn-primary"
            >
              Create New
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { PlayListModal };
