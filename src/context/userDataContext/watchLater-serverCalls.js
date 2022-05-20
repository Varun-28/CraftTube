import axios from "axios";

const getWatchlater = async (dataDispatch) => {
  const token = localStorage.getItem("userToken");
  const {
    data: { watchlater },
  } = await axios.get("/api/user/watchlater", {
    headers: { authorization: token },
  });
  dataDispatch({ type: "WATCHLATER", payload: watchlater });
};

const addToWatchLater = async (video, dataDispatch) => {
  const token = localStorage.getItem("userToken");
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
};

const removeFromWatchLater = async (videoId, dataDispatch) => {
  const token = localStorage.getItem("userToken");
  const {
    data: { watchlater },
  } = await axios.delete(`/api/user/watchlater/${videoId}`, {
    headers: { authorization: token },
  });
  dataDispatch({ type: "WATCHLATER", payload: watchlater });
};

export { getWatchlater, addToWatchLater, removeFromWatchLater };
