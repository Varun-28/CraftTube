import { useEffect } from "react";
import { useUserData } from "./userData-context";
import { useAlert } from "react-alert";
import axios from "axios";

function useWatchLaterServerCalls() {
  const token = localStorage.getItem("userToken");
  const { dataDispatch } = useUserData();
  const alert = useAlert();

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { watchlater },
        } = await axios.get("/api/user/watchlater", {
          headers: { authorization: token },
        });
        dataDispatch({ type: "WATCHLATER", payload: watchlater });
      } catch (error) {
        alert.show(`WatchLater ${error}`, {
          type: "error",
        });
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const addToWatchLater = async (video) => {
    try {
      const {
        data: { watchlater },
      } = await axios.post(
        "/api/user/watchlater",
        { video },
        {
          headers: { authorization: token },
        }
      );
      dataDispatch({ type: "WATCHLATER", payload: watchlater });
      alert.show("Added to Watch Later", {
        type: "success",
      });
    } catch (error) {
      alert.show(`WatchLater ${error}`, {
        type: "error",
      });
    }
  };

  const removeFromWatchLater = async (videoId) => {
    try {
      const {
        data: { watchlater },
      } = await axios.delete(`/api/user/watchlater/${videoId}`, {
        headers: { authorization: token },
      });
      dataDispatch({ type: "WATCHLATER", payload: watchlater });
      alert.show("Removed from Watch Later", {
        type: "success",
      });
    } catch (error) {
      alert.show(`WatchLater ${error}`, {
        type: "error",
      });
    }
  };

  return { addToWatchLater, removeFromWatchLater };
}

export { useWatchLaterServerCalls };
