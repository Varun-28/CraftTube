import axios from "axios";

const getWatchlater = async (dataDispatch) => {
  try {
    const token = localStorage.getItem("userToken");
    const {
      data: { watchlater },
    } = await axios.get("/api/user/watchlater", {
      headers: { authorization: token },
    });
    dataDispatch({ type: "WATCHLATER", payload: watchlater });
  } catch (error) {
    console.log(error);
  }
};

const addToWatchLater = async (video, dataDispatch) => {
  try {
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
  } catch (error) {
    console.log(error);
  }
};

const removeFromWatchLater = async (videoId, dataDispatch) => {
  try {
    const token = localStorage.getItem("userToken");
    const {
      data: { watchlater },
    } = await axios.delete(`/api/user/watchlater/${videoId}`, {
      headers: { authorization: token },
    });
    dataDispatch({ type: "WATCHLATER", payload: watchlater });
  } catch (error) {
    console.log(error);
  }
};

export { getWatchlater, addToWatchLater, removeFromWatchLater };
