import axios from "axios";

const getHistory = async (dataDispatch) => {
  try {
    const token = localStorage.getItem("userToken");
    const {
      data: { history },
    } = await axios.get("/api/user/history", {
      headers: { authorization: token },
    });

    dataDispatch({ type: "HISTORY", payload: history });
  } catch (error) {
    console.log(error);
  }
};

const addToHistory = async (video, dataDispatch) => {
  try {
    const token = localStorage.getItem("userToken");
    const {
      data: { history },
    } = await axios.post(
      "/api/user/history",
      { video },
      {
        headers: { authorization: token },
      }
    );
    dataDispatch({ type: "HISTORY", payload: history });
  } catch (error) {
    console.log(error);
  }
};

const removeFromHistory = async (videoId, dataDispatch) => {
  try {
    const token = localStorage.getItem("userToken");
    const {
      data: { history },
    } = await axios.delete(`/api/user/history/${videoId}`, {
      headers: { authorization: token },
    });

    dataDispatch({ type: "HISTORY", payload: history });
  } catch (error) {
    console.log(error);
  }
};

const clearHistory = async (dataDispatch) => {
  try {
    const token = localStorage.getItem("userToken");
    const {
      data: { history },
    } = await axios.delete("/api/user/history/all", {
      headers: { authorization: token },
    });

    dataDispatch({ type: "HISTORY", payload: history });
  } catch (error) {
    console.log(error);
  }
};

export { getHistory, addToHistory, removeFromHistory, clearHistory };
