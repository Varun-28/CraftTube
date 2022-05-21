import { useEffect } from "react";
import axios from "axios";
import { useAuth } from "../authContext/auth-context";
import { usePlaylist } from "./playlist-context";

function usePlaylistServerCall() {
  const { authState } = useAuth();
  const { playlistDispatch } = usePlaylist();

  useEffect(() => {
    (async () => {
      if (authState.encodedToken.length !== 0) {
        try {
          const response = await axios.get("/api/user/playlists", {
            headers: { authorization: authState.encodedToken },
          });
          playlistDispatch({
            type: "ALL_PLAYLIST_REQUEST",
            payload: { status: true },
          });
          if (response.status === 200) {
            playlistDispatch({
              type: "ALL_PLAYLIST_SUCCESS",
              payload: response.data.playlists,
            });
          }
        } catch (error) {
          console.log(error);
        }
      }
    })();
  });

  const createPlaylist = async (title) => {
    try {
      const response = await axios.post(
        "/api/user/playlists",
        { playlist: { title: title, description: "User Created Playlist" } },
        { headers: { authorization: authState.encodedToken } }
      );
      if (response.status === 200 || response.status === 201) {
        playlistDispatch({
          type: "CREATE_PLAYLIST",
          payload: response.data.playlists,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const deletePlaylist = async (playlistID) => {
    try {
      const response = await axios.delete(`/api/user/playlists/${playlistID}`, {
        headers: { authorization: authState.encodedToken },
      });
      if (response.status === 200 || response.status === 201) {
        playlistDispatch({
          type: "DELETE_PLAYLIST",
          payload: response.data.playlists,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const addToPlaylist = async (playlistID, video) => {
    try {
      const response = await axios.post(
        `/api/user/playlists/${playlistID}`,
        { video },
        { headers: { authorization: authState.encodedToken } }
      );
      if (response.status === 200 || response.status === 201) {
        playlistDispatch({
          type: "ADD_TO_PLAYLIST",
          payload: response.data.playlist,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const deleteFromPlaylist = async (playlistID, videoID) => {
    try {
      const response = await axios.delete(
        `/api/user/playlists/${playlistID}/${videoID}`,
        {
          headers: {
            authorization: authState.encodedToken,
          },
        }
      );
      if (response.status === 200 || response.status === 201) {
        playlistDispatch({
          type: "DELETE_FROM_PLAYLIST",
          payload: response.data.playlist,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getPlaylistById = async (playlistID, encodedToken) => {
    try {
      const response = await axios.get(`/api/user/playlists/${playlistID}`, {
        headers: { authorization: encodedToken },
      });
      playlistDispatch({
        type: "PLAYLIST_REQUEST",
        payload: { status: true },
      });
      if (response.status === 200) {
        playlistDispatch({
          type: "PLAYLIST_SUCCESS",
          payload: response.data.playlist,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return {
    createPlaylist,
    deleteFromPlaylist,
    deletePlaylist,
    addToPlaylist,
    getPlaylistById,
  };
}

export { usePlaylistServerCall };
