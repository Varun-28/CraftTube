import React from "react";
import { useParams } from "react-router-dom";
import { Empty, CommonCard } from "../../components/Components";
import { usePlaylist } from "../../context/playlistContext/playlist-context";
import "./playlistDetail.css";

function PlaylistDetail() {
  const { playlistId } = useParams();
  const {
    playlistState: { playlists },
  } = usePlaylist();
  const currentPlaylist = playlists.find((item) => item._id === playlistId);
  return (
    <div>
      {currentPlaylist === undefined ? (
        <Empty emptyText="Playlist-Detail Page" />
      ) : (
        <section className="videos-wrapper p-4">
          <h4>{currentPlaylist.title}</h4>
          <div className="flex flex-wrap gap-2 mb-20 mt-4">
            {currentPlaylist.videos.map((video) => (
              <CommonCard
                video={video}
                key={video._id}
                type="playlist"
                playlistId={playlistId}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export { PlaylistDetail };
